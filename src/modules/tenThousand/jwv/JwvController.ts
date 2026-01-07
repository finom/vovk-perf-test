import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwv")
export default class JwvController {
  @operation({
    summary: "Get Jwv",
  })
  @get()
  static getJwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwv",
  })
  @post("{id}")
  static createJwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
