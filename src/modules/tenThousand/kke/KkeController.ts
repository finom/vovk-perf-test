import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kke")
export default class KkeController {
  @operation({
    summary: "Get Kke",
  })
  @get()
  static getKke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kke",
  })
  @post("{id}")
  static createKke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
