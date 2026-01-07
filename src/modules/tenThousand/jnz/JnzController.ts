import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnz")
export default class JnzController {
  @operation({
    summary: "Get Jnz",
  })
  @get()
  static getJnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnz",
  })
  @post("{id}")
  static createJnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
