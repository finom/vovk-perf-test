import { procedure, prefix, get, post, operation } from "vovk";

@prefix("few")
export default class FewController {
  @operation({
    summary: "Get Few",
  })
  @get()
  static getFew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Few",
  })
  @post("{id}")
  static createFew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
