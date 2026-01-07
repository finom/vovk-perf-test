import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwl")
export default class JwlController {
  @operation({
    summary: "Get Jwl",
  })
  @get()
  static getJwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwl",
  })
  @post("{id}")
  static createJwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
