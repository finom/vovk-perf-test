import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ets")
export default class EtsController {
  @operation({
    summary: "Get Ets",
  })
  @get()
  static getEts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ets",
  })
  @post("{id}")
  static createEts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
