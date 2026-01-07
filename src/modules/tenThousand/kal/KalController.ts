import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kal")
export default class KalController {
  @operation({
    summary: "Get Kal",
  })
  @get()
  static getKal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kal",
  })
  @post("{id}")
  static createKal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
