import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kw")
export default class KwController {
  @operation({
    summary: "Get Kw",
  })
  @get()
  static getKw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kw",
  })
  @post("{id}")
  static createKw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
