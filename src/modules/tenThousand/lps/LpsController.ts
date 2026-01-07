import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lps")
export default class LpsController {
  @operation({
    summary: "Get Lps",
  })
  @get()
  static getLps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lps",
  })
  @post("{id}")
  static createLps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
