import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bld")
export default class BldController {
  @operation({
    summary: "Get Bld",
  })
  @get()
  static getBld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bld",
  })
  @post("{id}")
  static createBld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
