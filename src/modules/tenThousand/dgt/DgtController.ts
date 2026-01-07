import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgt")
export default class DgtController {
  @operation({
    summary: "Get Dgt",
  })
  @get()
  static getDgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgt",
  })
  @post("{id}")
  static createDgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
