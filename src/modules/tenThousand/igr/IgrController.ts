import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igr")
export default class IgrController {
  @operation({
    summary: "Get Igr",
  })
  @get()
  static getIgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igr",
  })
  @post("{id}")
  static createIgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
