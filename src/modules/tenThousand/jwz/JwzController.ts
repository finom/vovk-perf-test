import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwz")
export default class JwzController {
  @operation({
    summary: "Get Jwz",
  })
  @get()
  static getJwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwz",
  })
  @post("{id}")
  static createJwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
