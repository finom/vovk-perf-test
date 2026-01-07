import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ask")
export default class AskController {
  @operation({
    summary: "Get Ask",
  })
  @get()
  static getAsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ask",
  })
  @post("{id}")
  static createAsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
