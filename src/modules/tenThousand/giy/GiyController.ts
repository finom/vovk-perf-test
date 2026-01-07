import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giy")
export default class GiyController {
  @operation({
    summary: "Get Giy",
  })
  @get()
  static getGiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giy",
  })
  @post("{id}")
  static createGiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
