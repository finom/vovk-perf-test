import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kge")
export default class KgeController {
  @operation({
    summary: "Get Kge",
  })
  @get()
  static getKge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kge",
  })
  @post("{id}")
  static createKge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
