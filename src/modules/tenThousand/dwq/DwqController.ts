import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwq")
export default class DwqController {
  @operation({
    summary: "Get Dwq",
  })
  @get()
  static getDwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwq",
  })
  @post("{id}")
  static createDwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
