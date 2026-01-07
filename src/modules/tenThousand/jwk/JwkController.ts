import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwk")
export default class JwkController {
  @operation({
    summary: "Get Jwk",
  })
  @get()
  static getJwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwk",
  })
  @post("{id}")
  static createJwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
