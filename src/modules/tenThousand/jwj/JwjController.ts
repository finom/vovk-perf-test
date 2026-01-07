import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwj")
export default class JwjController {
  @operation({
    summary: "Get Jwj",
  })
  @get()
  static getJwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwj",
  })
  @post("{id}")
  static createJwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
