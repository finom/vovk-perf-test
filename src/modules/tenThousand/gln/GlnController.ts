import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gln")
export default class GlnController {
  @operation({
    summary: "Get Gln",
  })
  @get()
  static getGln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gln",
  })
  @post("{id}")
  static createGln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
