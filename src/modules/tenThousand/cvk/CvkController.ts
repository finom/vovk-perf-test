import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvk")
export default class CvkController {
  @operation({
    summary: "Get Cvk",
  })
  @get()
  static getCvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvk",
  })
  @post("{id}")
  static createCvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
