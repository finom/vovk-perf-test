import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwz")
export default class DwzController {
  @operation({
    summary: "Get Dwz",
  })
  @get()
  static getDwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwz",
  })
  @post("{id}")
  static createDwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
