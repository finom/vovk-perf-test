import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijt")
export default class IjtController {
  @operation({
    summary: "Get Ijt",
  })
  @get()
  static getIjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijt",
  })
  @post("{id}")
  static createIjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
