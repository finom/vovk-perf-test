import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwg")
export default class DwgController {
  @operation({
    summary: "Get Dwg",
  })
  @get()
  static getDwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwg",
  })
  @post("{id}")
  static createDwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
