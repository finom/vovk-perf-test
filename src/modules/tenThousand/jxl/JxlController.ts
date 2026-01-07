import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxl")
export default class JxlController {
  @operation({
    summary: "Get Jxl",
  })
  @get()
  static getJxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxl",
  })
  @post("{id}")
  static createJxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
