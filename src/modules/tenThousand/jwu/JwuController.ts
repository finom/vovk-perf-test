import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwu")
export default class JwuController {
  @operation({
    summary: "Get Jwu",
  })
  @get()
  static getJwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwu",
  })
  @post("{id}")
  static createJwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
