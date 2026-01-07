import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsl")
export default class BslController {
  @operation({
    summary: "Get Bsl",
  })
  @get()
  static getBsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsl",
  })
  @post("{id}")
  static createBsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
