import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksg")
export default class KsgController {
  @operation({
    summary: "Get Ksg",
  })
  @get()
  static getKsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksg",
  })
  @post("{id}")
  static createKsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
