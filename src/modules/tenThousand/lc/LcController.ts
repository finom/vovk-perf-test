import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lc")
export default class LcController {
  @operation({
    summary: "Get Lc",
  })
  @get()
  static getLc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lc",
  })
  @post("{id}")
  static createLc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
