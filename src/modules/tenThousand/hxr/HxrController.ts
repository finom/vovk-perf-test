import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxr")
export default class HxrController {
  @operation({
    summary: "Get Hxr",
  })
  @get()
  static getHxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxr",
  })
  @post("{id}")
  static createHxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
