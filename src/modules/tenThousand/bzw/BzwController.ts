import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzw")
export default class BzwController {
  @operation({
    summary: "Get Bzw",
  })
  @get()
  static getBzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzw",
  })
  @post("{id}")
  static createBzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
