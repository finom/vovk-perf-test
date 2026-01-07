import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwg")
export default class JwgController {
  @operation({
    summary: "Get Jwg",
  })
  @get()
  static getJwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwg",
  })
  @post("{id}")
  static createJwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
