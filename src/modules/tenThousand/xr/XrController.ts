import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xr")
export default class XrController {
  @operation({
    summary: "Get Xr",
  })
  @get()
  static getXr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xr",
  })
  @post("{id}")
  static createXr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
