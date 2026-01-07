import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpe")
export default class BpeController {
  @operation({
    summary: "Get Bpe",
  })
  @get()
  static getBpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpe",
  })
  @post("{id}")
  static createBpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
