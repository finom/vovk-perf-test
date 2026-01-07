import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esi")
export default class EsiController {
  @operation({
    summary: "Get Esi",
  })
  @get()
  static getEsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esi",
  })
  @post("{id}")
  static createEsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
