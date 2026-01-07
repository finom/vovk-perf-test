import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvp")
export default class CvpController {
  @operation({
    summary: "Get Cvp",
  })
  @get()
  static getCvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvp",
  })
  @post("{id}")
  static createCvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
