import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gso")
export default class GsoController {
  @operation({
    summary: "Get Gso",
  })
  @get()
  static getGso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gso",
  })
  @post("{id}")
  static createGso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
