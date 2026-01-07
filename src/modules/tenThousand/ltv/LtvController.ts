import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltv")
export default class LtvController {
  @operation({
    summary: "Get Ltv",
  })
  @get()
  static getLtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltv",
  })
  @post("{id}")
  static createLtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
