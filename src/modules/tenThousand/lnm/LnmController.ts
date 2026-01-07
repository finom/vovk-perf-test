import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnm")
export default class LnmController {
  @operation({
    summary: "Get Lnm",
  })
  @get()
  static getLnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnm",
  })
  @post("{id}")
  static createLnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
