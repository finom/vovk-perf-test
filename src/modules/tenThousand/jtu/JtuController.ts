import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtu")
export default class JtuController {
  @operation({
    summary: "Get Jtu",
  })
  @get()
  static getJtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtu",
  })
  @post("{id}")
  static createJtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
