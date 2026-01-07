import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kce")
export default class KceController {
  @operation({
    summary: "Get Kce",
  })
  @get()
  static getKce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kce",
  })
  @post("{id}")
  static createKce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
