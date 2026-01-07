import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krx")
export default class KrxController {
  @operation({
    summary: "Get Krx",
  })
  @get()
  static getKrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krx",
  })
  @post("{id}")
  static createKrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
