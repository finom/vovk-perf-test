import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jti")
export default class JtiController {
  @operation({
    summary: "Get Jti",
  })
  @get()
  static getJti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jti",
  })
  @post("{id}")
  static createJti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
