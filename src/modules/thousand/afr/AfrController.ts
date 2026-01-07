import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afr")
export default class AfrController {
  @operation({
    summary: "Get Afr",
  })
  @get()
  static getAfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afr",
  })
  @post("{id}")
  static createAfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
