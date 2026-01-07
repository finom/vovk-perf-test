import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzy")
export default class BzyController {
  @operation({
    summary: "Get Bzy",
  })
  @get()
  static getBzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzy",
  })
  @post("{id}")
  static createBzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
