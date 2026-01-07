import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hem")
export default class HemController {
  @operation({
    summary: "Get Hem",
  })
  @get()
  static getHem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hem",
  })
  @post("{id}")
  static createHem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
