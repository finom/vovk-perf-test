import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnr")
export default class LnrController {
  @operation({
    summary: "Get Lnr",
  })
  @get()
  static getLnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnr",
  })
  @post("{id}")
  static createLnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
