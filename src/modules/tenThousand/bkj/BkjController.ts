import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkj")
export default class BkjController {
  @operation({
    summary: "Get Bkj",
  })
  @get()
  static getBkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkj",
  })
  @post("{id}")
  static createBkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
