import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyg")
export default class JygController {
  @operation({
    summary: "Get Jyg",
  })
  @get()
  static getJyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyg",
  })
  @post("{id}")
  static createJyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
