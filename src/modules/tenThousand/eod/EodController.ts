import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eod")
export default class EodController {
  @operation({
    summary: "Get Eod",
  })
  @get()
  static getEod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eod",
  })
  @post("{id}")
  static createEod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
