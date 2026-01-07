import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebi")
export default class EbiController {
  @operation({
    summary: "Get Ebi",
  })
  @get()
  static getEbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebi",
  })
  @post("{id}")
  static createEbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
