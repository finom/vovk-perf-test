import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lik")
export default class LikController {
  @operation({
    summary: "Get Lik",
  })
  @get()
  static getLik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lik",
  })
  @post("{id}")
  static createLik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
