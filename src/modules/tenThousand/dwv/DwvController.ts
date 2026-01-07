import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwv")
export default class DwvController {
  @operation({
    summary: "Get Dwv",
  })
  @get()
  static getDwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwv",
  })
  @post("{id}")
  static createDwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
