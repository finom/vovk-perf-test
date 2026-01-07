import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbn")
export default class KbnController {
  @operation({
    summary: "Get Kbn",
  })
  @get()
  static getKbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbn",
  })
  @post("{id}")
  static createKbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
