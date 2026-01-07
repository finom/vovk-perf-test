import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnb")
export default class JnbController {
  @operation({
    summary: "Get Jnb",
  })
  @get()
  static getJnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnb",
  })
  @post("{id}")
  static createJnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
