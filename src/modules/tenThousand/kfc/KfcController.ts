import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfc")
export default class KfcController {
  @operation({
    summary: "Get Kfc",
  })
  @get()
  static getKfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfc",
  })
  @post("{id}")
  static createKfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
