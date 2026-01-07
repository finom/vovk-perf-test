import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxl")
export default class HxlController {
  @operation({
    summary: "Get Hxl",
  })
  @get()
  static getHxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxl",
  })
  @post("{id}")
  static createHxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
