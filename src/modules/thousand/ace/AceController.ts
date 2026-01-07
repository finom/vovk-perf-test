import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ace")
export default class AceController {
  @operation({
    summary: "Get Ace",
  })
  @get()
  static getAce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ace",
  })
  @post("{id}")
  static createAce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
