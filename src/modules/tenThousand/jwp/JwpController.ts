import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwp")
export default class JwpController {
  @operation({
    summary: "Get Jwp",
  })
  @get()
  static getJwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwp",
  })
  @post("{id}")
  static createJwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
