import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwf")
export default class JwfController {
  @operation({
    summary: "Get Jwf",
  })
  @get()
  static getJwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwf",
  })
  @post("{id}")
  static createJwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
