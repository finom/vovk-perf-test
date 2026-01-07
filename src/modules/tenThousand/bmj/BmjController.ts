import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmj")
export default class BmjController {
  @operation({
    summary: "Get Bmj",
  })
  @get()
  static getBmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmj",
  })
  @post("{id}")
  static createBmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
