import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvi")
export default class KviController {
  @operation({
    summary: "Get Kvi",
  })
  @get()
  static getKvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvi",
  })
  @post("{id}")
  static createKvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
