import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwu")
export default class DwuController {
  @operation({
    summary: "Get Dwu",
  })
  @get()
  static getDwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwu",
  })
  @post("{id}")
  static createDwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
