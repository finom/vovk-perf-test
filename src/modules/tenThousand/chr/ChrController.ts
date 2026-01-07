import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chr")
export default class ChrController {
  @operation({
    summary: "Get Chr",
  })
  @get()
  static getChr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chr",
  })
  @post("{id}")
  static createChr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
