import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const NoteCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="120px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default NoteCardSkeleton;
