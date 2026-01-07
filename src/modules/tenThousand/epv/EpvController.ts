import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epv")
export default class EpvController {
  @operation({
    summary: "Get Epv",
  })
  @get()
  static getEpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epv",
  })
  @post("{id}")
  static createEpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
