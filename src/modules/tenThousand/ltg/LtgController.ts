import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltg")
export default class LtgController {
  @operation({
    summary: "Get Ltg",
  })
  @get()
  static getLtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltg",
  })
  @post("{id}")
  static createLtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
