import { procedure, prefix, get, post, operation } from "vovk";

@prefix("he")
export default class HeController {
  @operation({
    summary: "Get He",
  })
  @get()
  static getHe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create He",
  })
  @post("{id}")
  static createHe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
