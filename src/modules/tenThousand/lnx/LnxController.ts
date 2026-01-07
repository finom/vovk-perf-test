import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnx")
export default class LnxController {
  @operation({
    summary: "Get Lnx",
  })
  @get()
  static getLnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnx",
  })
  @post("{id}")
  static createLnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
