import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxl")
export default class BxlController {
  @operation({
    summary: "Get Bxl",
  })
  @get()
  static getBxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxl",
  })
  @post("{id}")
  static createBxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
