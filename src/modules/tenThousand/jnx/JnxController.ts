import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnx")
export default class JnxController {
  @operation({
    summary: "Get Jnx",
  })
  @get()
  static getJnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnx",
  })
  @post("{id}")
  static createJnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
