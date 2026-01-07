import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdn")
export default class CdnController {
  @operation({
    summary: "Get Cdn",
  })
  @get()
  static getCdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdn",
  })
  @post("{id}")
  static createCdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
