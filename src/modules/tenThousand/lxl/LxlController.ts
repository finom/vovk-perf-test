import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxl")
export default class LxlController {
  @operation({
    summary: "Get Lxl",
  })
  @get()
  static getLxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxl",
  })
  @post("{id}")
  static createLxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
