import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpi")
export default class DpiController {
  @operation({
    summary: "Get Dpi",
  })
  @get()
  static getDpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpi",
  })
  @post("{id}")
  static createDpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
