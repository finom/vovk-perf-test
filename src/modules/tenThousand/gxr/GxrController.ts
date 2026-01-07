import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxr")
export default class GxrController {
  @operation({
    summary: "Get Gxr",
  })
  @get()
  static getGxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxr",
  })
  @post("{id}")
  static createGxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
