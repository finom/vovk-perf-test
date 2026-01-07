import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpa")
export default class KpaController {
  @operation({
    summary: "Get Kpa",
  })
  @get()
  static getKpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpa",
  })
  @post("{id}")
  static createKpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
