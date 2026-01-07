import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvj")
export default class CvjController {
  @operation({
    summary: "Get Cvj",
  })
  @get()
  static getCvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvj",
  })
  @post("{id}")
  static createCvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
