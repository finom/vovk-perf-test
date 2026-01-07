import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edn")
export default class EdnController {
  @operation({
    summary: "Get Edn",
  })
  @get()
  static getEdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edn",
  })
  @post("{id}")
  static createEdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
