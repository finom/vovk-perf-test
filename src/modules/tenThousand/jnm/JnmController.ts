import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnm")
export default class JnmController {
  @operation({
    summary: "Get Jnm",
  })
  @get()
  static getJnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnm",
  })
  @post("{id}")
  static createJnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
