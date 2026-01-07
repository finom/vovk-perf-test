import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvl")
export default class CvlController {
  @operation({
    summary: "Get Cvl",
  })
  @get()
  static getCvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvl",
  })
  @post("{id}")
  static createCvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
