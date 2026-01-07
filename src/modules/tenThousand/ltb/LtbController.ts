import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltb")
export default class LtbController {
  @operation({
    summary: "Get Ltb",
  })
  @get()
  static getLtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltb",
  })
  @post("{id}")
  static createLtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
