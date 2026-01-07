import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnc")
export default class LncController {
  @operation({
    summary: "Get Lnc",
  })
  @get()
  static getLnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnc",
  })
  @post("{id}")
  static createLnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
