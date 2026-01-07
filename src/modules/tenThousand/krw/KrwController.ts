import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krw")
export default class KrwController {
  @operation({
    summary: "Get Krw",
  })
  @get()
  static getKrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krw",
  })
  @post("{id}")
  static createKrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
