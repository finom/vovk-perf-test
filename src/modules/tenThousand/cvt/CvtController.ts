import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvt")
export default class CvtController {
  @operation({
    summary: "Get Cvt",
  })
  @get()
  static getCvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvt",
  })
  @post("{id}")
  static createCvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
