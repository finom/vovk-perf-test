import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpl")
export default class BplController {
  @operation({
    summary: "Get Bpl",
  })
  @get()
  static getBpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpl",
  })
  @post("{id}")
  static createBpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
