import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqs")
export default class CqsController {
  @operation({
    summary: "Get Cqs",
  })
  @get()
  static getCqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqs",
  })
  @post("{id}")
  static createCqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
