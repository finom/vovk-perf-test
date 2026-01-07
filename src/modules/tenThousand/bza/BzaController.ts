import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bza")
export default class BzaController {
  @operation({
    summary: "Get Bza",
  })
  @get()
  static getBza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bza",
  })
  @post("{id}")
  static createBza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
