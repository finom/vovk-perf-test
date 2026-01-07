import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnj")
export default class LnjController {
  @operation({
    summary: "Get Lnj",
  })
  @get()
  static getLnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnj",
  })
  @post("{id}")
  static createLnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
