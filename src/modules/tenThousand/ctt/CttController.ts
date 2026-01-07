import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctt")
export default class CttController {
  @operation({
    summary: "Get Ctt",
  })
  @get()
  static getCtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctt",
  })
  @post("{id}")
  static createCtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
