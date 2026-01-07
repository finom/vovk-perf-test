import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leu")
export default class LeuController {
  @operation({
    summary: "Get Leu",
  })
  @get()
  static getLeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leu",
  })
  @post("{id}")
  static createLeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
