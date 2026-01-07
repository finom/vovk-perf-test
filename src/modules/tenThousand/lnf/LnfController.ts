import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnf")
export default class LnfController {
  @operation({
    summary: "Get Lnf",
  })
  @get()
  static getLnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnf",
  })
  @post("{id}")
  static createLnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
