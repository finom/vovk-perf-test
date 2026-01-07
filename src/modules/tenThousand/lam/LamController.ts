import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lam")
export default class LamController {
  @operation({
    summary: "Get Lam",
  })
  @get()
  static getLam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lam",
  })
  @post("{id}")
  static createLam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
