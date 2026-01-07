import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbt")
export default class BbtController {
  @operation({
    summary: "Get Bbt",
  })
  @get()
  static getBbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbt",
  })
  @post("{id}")
  static createBbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
