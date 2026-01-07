import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbd")
export default class LbdController {
  @operation({
    summary: "Get Lbd",
  })
  @get()
  static getLbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbd",
  })
  @post("{id}")
  static createLbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
