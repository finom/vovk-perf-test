import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jla")
export default class JlaController {
  @operation({
    summary: "Get Jla",
  })
  @get()
  static getJla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jla",
  })
  @post("{id}")
  static createJla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
