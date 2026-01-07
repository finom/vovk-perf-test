import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnl")
export default class CnlController {
  @operation({
    summary: "Get Cnl",
  })
  @get()
  static getCnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnl",
  })
  @post("{id}")
  static createCnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
