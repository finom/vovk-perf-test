import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwl")
export default class DwlController {
  @operation({
    summary: "Get Dwl",
  })
  @get()
  static getDwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwl",
  })
  @post("{id}")
  static createDwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
