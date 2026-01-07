import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxc")
export default class BxcController {
  @operation({
    summary: "Get Bxc",
  })
  @get()
  static getBxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxc",
  })
  @post("{id}")
  static createBxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
