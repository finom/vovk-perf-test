import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqb")
export default class JqbController {
  @operation({
    summary: "Get Jqb",
  })
  @get()
  static getJqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqb",
  })
  @post("{id}")
  static createJqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
