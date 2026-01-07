import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kag")
export default class KagController {
  @operation({
    summary: "Get Kag",
  })
  @get()
  static getKag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kag",
  })
  @post("{id}")
  static createKag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
