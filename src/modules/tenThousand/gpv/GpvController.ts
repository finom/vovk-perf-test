import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpv")
export default class GpvController {
  @operation({
    summary: "Get Gpv",
  })
  @get()
  static getGpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpv",
  })
  @post("{id}")
  static createGpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
