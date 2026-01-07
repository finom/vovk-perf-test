import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktn")
export default class KtnController {
  @operation({
    summary: "Get Ktn",
  })
  @get()
  static getKtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktn",
  })
  @post("{id}")
  static createKtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
