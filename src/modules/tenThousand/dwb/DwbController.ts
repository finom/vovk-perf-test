import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwb")
export default class DwbController {
  @operation({
    summary: "Get Dwb",
  })
  @get()
  static getDwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwb",
  })
  @post("{id}")
  static createDwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
