import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxe")
export default class BxeController {
  @operation({
    summary: "Get Bxe",
  })
  @get()
  static getBxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxe",
  })
  @post("{id}")
  static createBxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
