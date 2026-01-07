import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jek")
export default class JekController {
  @operation({
    summary: "Get Jek",
  })
  @get()
  static getJek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jek",
  })
  @post("{id}")
  static createJek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
