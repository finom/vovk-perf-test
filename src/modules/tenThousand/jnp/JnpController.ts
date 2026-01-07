import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnp")
export default class JnpController {
  @operation({
    summary: "Get Jnp",
  })
  @get()
  static getJnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnp",
  })
  @post("{id}")
  static createJnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
