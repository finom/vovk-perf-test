import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltq")
export default class LtqController {
  @operation({
    summary: "Get Ltq",
  })
  @get()
  static getLtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltq",
  })
  @post("{id}")
  static createLtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
