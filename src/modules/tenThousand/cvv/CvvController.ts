import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvv")
export default class CvvController {
  @operation({
    summary: "Get Cvv",
  })
  @get()
  static getCvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvv",
  })
  @post("{id}")
  static createCvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
