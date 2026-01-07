import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbi")
export default class LbiController {
  @operation({
    summary: "Get Lbi",
  })
  @get()
  static getLbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbi",
  })
  @post("{id}")
  static createLbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
