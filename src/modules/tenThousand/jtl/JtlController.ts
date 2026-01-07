import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtl")
export default class JtlController {
  @operation({
    summary: "Get Jtl",
  })
  @get()
  static getJtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtl",
  })
  @post("{id}")
  static createJtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
