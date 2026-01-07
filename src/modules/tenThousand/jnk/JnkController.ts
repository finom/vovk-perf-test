import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnk")
export default class JnkController {
  @operation({
    summary: "Get Jnk",
  })
  @get()
  static getJnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnk",
  })
  @post("{id}")
  static createJnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
