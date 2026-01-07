import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmu")
export default class KmuController {
  @operation({
    summary: "Get Kmu",
  })
  @get()
  static getKmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmu",
  })
  @post("{id}")
  static createKmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
