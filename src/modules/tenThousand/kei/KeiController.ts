import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kei")
export default class KeiController {
  @operation({
    summary: "Get Kei",
  })
  @get()
  static getKei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kei",
  })
  @post("{id}")
  static createKei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
