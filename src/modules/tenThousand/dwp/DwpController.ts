import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwp")
export default class DwpController {
  @operation({
    summary: "Get Dwp",
  })
  @get()
  static getDwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwp",
  })
  @post("{id}")
  static createDwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
