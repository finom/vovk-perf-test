import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwq")
export default class JwqController {
  @operation({
    summary: "Get Jwq",
  })
  @get()
  static getJwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwq",
  })
  @post("{id}")
  static createJwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
