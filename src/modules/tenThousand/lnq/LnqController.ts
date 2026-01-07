import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnq")
export default class LnqController {
  @operation({
    summary: "Get Lnq",
  })
  @get()
  static getLnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnq",
  })
  @post("{id}")
  static createLnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
