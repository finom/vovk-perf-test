import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvq")
export default class CvqController {
  @operation({
    summary: "Get Cvq",
  })
  @get()
  static getCvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvq",
  })
  @post("{id}")
  static createCvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
