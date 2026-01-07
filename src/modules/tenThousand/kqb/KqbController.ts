import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqb")
export default class KqbController {
  @operation({
    summary: "Get Kqb",
  })
  @get()
  static getKqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqb",
  })
  @post("{id}")
  static createKqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
