import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adr")
export default class AdrController {
  @operation({
    summary: "Get Adr",
  })
  @get()
  static getAdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adr",
  })
  @post("{id}")
  static createAdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
