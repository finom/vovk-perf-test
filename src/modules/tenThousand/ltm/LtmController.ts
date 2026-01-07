import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltm")
export default class LtmController {
  @operation({
    summary: "Get Ltm",
  })
  @get()
  static getLtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltm",
  })
  @post("{id}")
  static createLtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
