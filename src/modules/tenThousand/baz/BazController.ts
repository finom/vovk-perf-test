import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baz")
export default class BazController {
  @operation({
    summary: "Get Baz",
  })
  @get()
  static getBaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baz",
  })
  @post("{id}")
  static createBaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
