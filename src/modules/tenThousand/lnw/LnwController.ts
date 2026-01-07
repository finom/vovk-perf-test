import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnw")
export default class LnwController {
  @operation({
    summary: "Get Lnw",
  })
  @get()
  static getLnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnw",
  })
  @post("{id}")
  static createLnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
