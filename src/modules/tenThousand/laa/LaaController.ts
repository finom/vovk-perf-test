import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laa")
export default class LaaController {
  @operation({
    summary: "Get Laa",
  })
  @get()
  static getLaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laa",
  })
  @post("{id}")
  static createLaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
