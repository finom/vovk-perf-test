import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hei")
export default class HeiController {
  @operation({
    summary: "Get Hei",
  })
  @get()
  static getHei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hei",
  })
  @post("{id}")
  static createHei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
