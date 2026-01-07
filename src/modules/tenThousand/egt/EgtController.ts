import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egt")
export default class EgtController {
  @operation({
    summary: "Get Egt",
  })
  @get()
  static getEgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egt",
  })
  @post("{id}")
  static createEgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
