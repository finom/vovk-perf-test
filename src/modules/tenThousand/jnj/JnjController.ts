import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnj")
export default class JnjController {
  @operation({
    summary: "Get Jnj",
  })
  @get()
  static getJnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnj",
  })
  @post("{id}")
  static createJnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
