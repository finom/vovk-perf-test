import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esv")
export default class EsvController {
  @operation({
    summary: "Get Esv",
  })
  @get()
  static getEsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esv",
  })
  @post("{id}")
  static createEsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
