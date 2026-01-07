import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mge")
export default class MgeController {
  @operation({
    summary: "Get Mge",
  })
  @get()
  static getMge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mge",
  })
  @post("{id}")
  static createMge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
