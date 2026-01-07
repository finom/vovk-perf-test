import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aql")
export default class AqlController {
  @operation({
    summary: "Get Aql",
  })
  @get()
  static getAql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aql",
  })
  @post("{id}")
  static createAql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
