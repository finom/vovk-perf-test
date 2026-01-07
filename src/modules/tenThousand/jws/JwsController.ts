import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jws")
export default class JwsController {
  @operation({
    summary: "Get Jws",
  })
  @get()
  static getJws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jws",
  })
  @post("{id}")
  static createJws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
