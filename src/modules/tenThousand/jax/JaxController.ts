import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jax")
export default class JaxController {
  @operation({
    summary: "Get Jax",
  })
  @get()
  static getJax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jax",
  })
  @post("{id}")
  static createJax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
