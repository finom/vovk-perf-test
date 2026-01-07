import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eei")
export default class EeiController {
  @operation({
    summary: "Get Eei",
  })
  @get()
  static getEei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eei",
  })
  @post("{id}")
  static createEei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
