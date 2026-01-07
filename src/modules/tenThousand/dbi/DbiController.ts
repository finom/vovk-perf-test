import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbi")
export default class DbiController {
  @operation({
    summary: "Get Dbi",
  })
  @get()
  static getDbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbi",
  })
  @post("{id}")
  static createDbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
