import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmt")
export default class LmtController {
  @operation({
    summary: "Get Lmt",
  })
  @get()
  static getLmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmt",
  })
  @post("{id}")
  static createLmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
