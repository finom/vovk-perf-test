import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyj")
export default class CyjController {
  @operation({
    summary: "Get Cyj",
  })
  @get()
  static getCyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyj",
  })
  @post("{id}")
  static createCyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
