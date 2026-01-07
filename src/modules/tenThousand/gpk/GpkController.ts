import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpk")
export default class GpkController {
  @operation({
    summary: "Get Gpk",
  })
  @get()
  static getGpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpk",
  })
  @post("{id}")
  static createGpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
