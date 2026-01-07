import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxl")
export default class GxlController {
  @operation({
    summary: "Get Gxl",
  })
  @get()
  static getGxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxl",
  })
  @post("{id}")
  static createGxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
