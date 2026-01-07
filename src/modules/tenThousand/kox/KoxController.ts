import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kox")
export default class KoxController {
  @operation({
    summary: "Get Kox",
  })
  @get()
  static getKox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kox",
  })
  @post("{id}")
  static createKox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
