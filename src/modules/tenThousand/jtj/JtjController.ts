import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtj")
export default class JtjController {
  @operation({
    summary: "Get Jtj",
  })
  @get()
  static getJtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtj",
  })
  @post("{id}")
  static createJtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
