import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpo")
export default class KpoController {
  @operation({
    summary: "Get Kpo",
  })
  @get()
  static getKpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpo",
  })
  @post("{id}")
  static createKpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
