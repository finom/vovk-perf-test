import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvm")
export default class BvmController {
  @operation({
    summary: "Get Bvm",
  })
  @get()
  static getBvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvm",
  })
  @post("{id}")
  static createBvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
