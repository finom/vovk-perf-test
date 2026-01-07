import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feu")
export default class FeuController {
  @operation({
    summary: "Get Feu",
  })
  @get()
  static getFeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feu",
  })
  @post("{id}")
  static createFeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
