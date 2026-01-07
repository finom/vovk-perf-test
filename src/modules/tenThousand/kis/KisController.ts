import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kis")
export default class KisController {
  @operation({
    summary: "Get Kis",
  })
  @get()
  static getKis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kis",
  })
  @post("{id}")
  static createKis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
