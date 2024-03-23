import { ChainType } from '@/types/ChainType';
import { twJoin } from 'tailwind-merge';

type ChainTypePickerProps = {
  selectedChainType?: string;
  onClick: (chainType: ChainType) => void;
  chainType?: ChainType;
  label: string;
  description: string;
};

export const ChainTypePicker: React.FC<ChainTypePickerProps> = ({
  selectedChainType,
  onClick,
  chainType,
  label,
  description,
}) => {
  return (
    <div
      className={twJoin(
        'm-0 flex cursor-pointer flex-col justify-start gap-3 glass-effect-button hover:bg-[#343434]',
        selectedChainType === chainType && 'border-white bg-[#99999]',
      )}
      onClick={() => {
        if (!chainType) return;
        onClick(chainType);
      }}
    >
      <div className="cursor-pointer justify-center text-left">
        <p className="cursor-pointer pb-3 text-2xl">{label}</p>
        <p className="text-sm text-white">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full bg-green"></div>
        <p className="text-sm">
          Transaction data posted{' '}
          {chainType === ChainType.Rollup ? 'to Ethereum' : chainType === ChainType.AnyTrust ? 'by a Data Availability Committee' : chainType === ChainType.CelestiaDA ? 'to Celestia' : ''}
        </p>
      </div>
    </div>
  );
};
