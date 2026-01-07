import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvd")
export default class CvdController {
  @operation({
    summary: "Get Cvd",
  })
  @get()
  static getCvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvd",
  })
  @post("{id}")
  static createCvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
