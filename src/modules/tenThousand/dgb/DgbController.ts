import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgb")
export default class DgbController {
  @operation({
    summary: "Get Dgb",
  })
  @get()
  static getDgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgb",
  })
  @post("{id}")
  static createDgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
