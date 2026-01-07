import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kez")
export default class KezController {
  @operation({
    summary: "Get Kez",
  })
  @get()
  static getKez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kez",
  })
  @post("{id}")
  static createKez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
