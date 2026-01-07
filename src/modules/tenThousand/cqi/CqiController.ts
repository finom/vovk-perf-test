import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqi")
export default class CqiController {
  @operation({
    summary: "Get Cqi",
  })
  @get()
  static getCqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqi",
  })
  @post("{id}")
  static createCqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
