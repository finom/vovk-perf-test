import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aev")
export default class AevController {
  @operation({
    summary: "Get Aev",
  })
  @get()
  static getAev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aev",
  })
  @post("{id}")
  static createAev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
