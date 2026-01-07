import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwx")
export default class JwxController {
  @operation({
    summary: "Get Jwx",
  })
  @get()
  static getJwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwx",
  })
  @post("{id}")
  static createJwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
