import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgg")
export default class LggController {
  @operation({
    summary: "Get Lgg",
  })
  @get()
  static getLgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgg",
  })
  @post("{id}")
  static createLgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
