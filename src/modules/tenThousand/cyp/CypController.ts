import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyp")
export default class CypController {
  @operation({
    summary: "Get Cyp",
  })
  @get()
  static getCyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyp",
  })
  @post("{id}")
  static createCyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
