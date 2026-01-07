import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvg")
export default class CvgController {
  @operation({
    summary: "Get Cvg",
  })
  @get()
  static getCvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvg",
  })
  @post("{id}")
  static createCvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
