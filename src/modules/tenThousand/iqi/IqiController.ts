import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqi")
export default class IqiController {
  @operation({
    summary: "Get Iqi",
  })
  @get()
  static getIqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqi",
  })
  @post("{id}")
  static createIqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
