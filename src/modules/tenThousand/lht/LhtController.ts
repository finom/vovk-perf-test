import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lht")
export default class LhtController {
  @operation({
    summary: "Get Lht",
  })
  @get()
  static getLht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lht",
  })
  @post("{id}")
  static createLht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
