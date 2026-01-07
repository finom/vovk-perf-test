import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqb")
export default class LqbController {
  @operation({
    summary: "Get Lqb",
  })
  @get()
  static getLqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqb",
  })
  @post("{id}")
  static createLqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
