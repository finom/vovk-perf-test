import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwc")
export default class JwcController {
  @operation({
    summary: "Get Jwc",
  })
  @get()
  static getJwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwc",
  })
  @post("{id}")
  static createJwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
