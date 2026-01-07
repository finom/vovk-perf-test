import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyn")
export default class KynController {
  @operation({
    summary: "Get Kyn",
  })
  @get()
  static getKyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyn",
  })
  @post("{id}")
  static createKyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
