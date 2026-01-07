import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fei")
export default class FeiController {
  @operation({
    summary: "Get Fei",
  })
  @get()
  static getFei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fei",
  })
  @post("{id}")
  static createFei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
