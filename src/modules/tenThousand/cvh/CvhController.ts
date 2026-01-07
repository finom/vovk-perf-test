import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvh")
export default class CvhController {
  @operation({
    summary: "Get Cvh",
  })
  @get()
  static getCvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvh",
  })
  @post("{id}")
  static createCvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
