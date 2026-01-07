import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqb")
export default class GqbController {
  @operation({
    summary: "Get Gqb",
  })
  @get()
  static getGqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqb",
  })
  @post("{id}")
  static createGqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
