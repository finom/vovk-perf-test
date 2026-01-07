import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnw")
export default class JnwController {
  @operation({
    summary: "Get Jnw",
  })
  @get()
  static getJnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnw",
  })
  @post("{id}")
  static createJnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
