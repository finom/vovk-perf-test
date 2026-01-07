import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdd")
export default class BddController {
  @operation({
    summary: "Get Bdd",
  })
  @get()
  static getBdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdd",
  })
  @post("{id}")
  static createBdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
