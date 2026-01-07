import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esn")
export default class EsnController {
  @operation({
    summary: "Get Esn",
  })
  @get()
  static getEsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esn",
  })
  @post("{id}")
  static createEsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
