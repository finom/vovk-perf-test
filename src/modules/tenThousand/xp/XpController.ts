import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xp")
export default class XpController {
  @operation({
    summary: "Get Xp",
  })
  @get()
  static getXp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xp",
  })
  @post("{id}")
  static createXp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
