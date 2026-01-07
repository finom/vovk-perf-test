import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mu")
export default class MuController {
  @operation({
    summary: "Get Mu",
  })
  @get()
  static getMu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mu",
  })
  @post("{id}")
  static createMu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
