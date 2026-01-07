import { procedure, prefix, get, post, operation } from "vovk";

@prefix("and")
export default class AndController {
  @operation({
    summary: "Get And",
  })
  @get()
  static getAnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create And",
  })
  @post("{id}")
  static createAnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
