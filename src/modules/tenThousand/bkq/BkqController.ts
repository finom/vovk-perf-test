import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkq")
export default class BkqController {
  @operation({
    summary: "Get Bkq",
  })
  @get()
  static getBkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkq",
  })
  @post("{id}")
  static createBkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
