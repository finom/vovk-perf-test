import { procedure, prefix, get, post, operation } from "vovk";

@prefix("god")
export default class GodController {
  @operation({
    summary: "Get God",
  })
  @get()
  static getGod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create God",
  })
  @post("{id}")
  static createGod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
