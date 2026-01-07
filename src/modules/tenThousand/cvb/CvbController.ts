import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvb")
export default class CvbController {
  @operation({
    summary: "Get Cvb",
  })
  @get()
  static getCvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvb",
  })
  @post("{id}")
  static createCvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
