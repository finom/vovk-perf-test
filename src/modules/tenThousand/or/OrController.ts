import { procedure, prefix, get, post, operation } from "vovk";

@prefix("or")
export default class OrController {
  @operation({
    summary: "Get Or",
  })
  @get()
  static getOr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Or",
  })
  @post("{id}")
  static createOr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
