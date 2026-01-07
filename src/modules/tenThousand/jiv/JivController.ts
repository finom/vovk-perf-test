import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiv")
export default class JivController {
  @operation({
    summary: "Get Jiv",
  })
  @get()
  static getJiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jiv",
  })
  @post("{id}")
  static createJiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
