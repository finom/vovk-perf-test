import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltw")
export default class LtwController {
  @operation({
    summary: "Get Ltw",
  })
  @get()
  static getLtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltw",
  })
  @post("{id}")
  static createLtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
