import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnc")
export default class JncController {
  @operation({
    summary: "Get Jnc",
  })
  @get()
  static getJnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnc",
  })
  @post("{id}")
  static createJnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
