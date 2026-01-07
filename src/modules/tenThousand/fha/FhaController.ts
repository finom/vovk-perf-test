import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fha")
export default class FhaController {
  @operation({
    summary: "Get Fha",
  })
  @get()
  static getFha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fha",
  })
  @post("{id}")
  static createFha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
