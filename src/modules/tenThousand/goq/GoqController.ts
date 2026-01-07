import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goq")
export default class GoqController {
  @operation({
    summary: "Get Goq",
  })
  @get()
  static getGoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goq",
  })
  @post("{id}")
  static createGoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
