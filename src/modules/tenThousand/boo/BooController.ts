import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boo")
export default class BooController {
  @operation({
    summary: "Get Boo",
  })
  @get()
  static getBoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boo",
  })
  @post("{id}")
  static createBoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
