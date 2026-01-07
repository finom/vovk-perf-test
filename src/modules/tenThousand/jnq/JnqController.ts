import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnq")
export default class JnqController {
  @operation({
    summary: "Get Jnq",
  })
  @get()
  static getJnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnq",
  })
  @post("{id}")
  static createJnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
