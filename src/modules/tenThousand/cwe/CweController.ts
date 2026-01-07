import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwe")
export default class CweController {
  @operation({
    summary: "Get Cwe",
  })
  @get()
  static getCwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwe",
  })
  @post("{id}")
  static createCwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
