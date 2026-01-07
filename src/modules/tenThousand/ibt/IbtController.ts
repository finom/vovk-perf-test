import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibt")
export default class IbtController {
  @operation({
    summary: "Get Ibt",
  })
  @get()
  static getIbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibt",
  })
  @post("{id}")
  static createIbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
