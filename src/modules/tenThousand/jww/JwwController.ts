import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jww")
export default class JwwController {
  @operation({
    summary: "Get Jww",
  })
  @get()
  static getJww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jww",
  })
  @post("{id}")
  static createJww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
