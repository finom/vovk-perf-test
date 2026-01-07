import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfr")
export default class KfrController {
  @operation({
    summary: "Get Kfr",
  })
  @get()
  static getKfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfr",
  })
  @post("{id}")
  static createKfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
