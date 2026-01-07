import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxn")
export default class CxnController {
  @operation({
    summary: "Get Cxn",
  })
  @get()
  static getCxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxn",
  })
  @post("{id}")
  static createCxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
