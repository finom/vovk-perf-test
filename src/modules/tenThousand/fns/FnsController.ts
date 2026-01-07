import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fns")
export default class FnsController {
  @operation({
    summary: "Get Fns",
  })
  @get()
  static getFns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fns",
  })
  @post("{id}")
  static createFns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
