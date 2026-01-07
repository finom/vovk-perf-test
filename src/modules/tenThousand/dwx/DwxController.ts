import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwx")
export default class DwxController {
  @operation({
    summary: "Get Dwx",
  })
  @get()
  static getDwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwx",
  })
  @post("{id}")
  static createDwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
