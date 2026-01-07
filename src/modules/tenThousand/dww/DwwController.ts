import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dww")
export default class DwwController {
  @operation({
    summary: "Get Dww",
  })
  @get()
  static getDww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dww",
  })
  @post("{id}")
  static createDww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
