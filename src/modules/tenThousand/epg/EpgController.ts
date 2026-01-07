import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epg")
export default class EpgController {
  @operation({
    summary: "Get Epg",
  })
  @get()
  static getEpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epg",
  })
  @post("{id}")
  static createEpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
