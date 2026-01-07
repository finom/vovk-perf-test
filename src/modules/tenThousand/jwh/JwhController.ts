import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwh")
export default class JwhController {
  @operation({
    summary: "Get Jwh",
  })
  @get()
  static getJwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwh",
  })
  @post("{id}")
  static createJwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
