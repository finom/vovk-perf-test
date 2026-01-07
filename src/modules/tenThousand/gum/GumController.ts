import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gum")
export default class GumController {
  @operation({
    summary: "Get Gum",
  })
  @get()
  static getGum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gum",
  })
  @post("{id}")
  static createGum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
