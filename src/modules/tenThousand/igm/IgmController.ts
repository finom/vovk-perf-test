import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igm")
export default class IgmController {
  @operation({
    summary: "Get Igm",
  })
  @get()
  static getIgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igm",
  })
  @post("{id}")
  static createIgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
