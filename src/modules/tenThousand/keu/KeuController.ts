import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keu")
export default class KeuController {
  @operation({
    summary: "Get Keu",
  })
  @get()
  static getKeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keu",
  })
  @post("{id}")
  static createKeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
