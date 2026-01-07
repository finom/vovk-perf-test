import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwo")
export default class JwoController {
  @operation({
    summary: "Get Jwo",
  })
  @get()
  static getJwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwo",
  })
  @post("{id}")
  static createJwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
