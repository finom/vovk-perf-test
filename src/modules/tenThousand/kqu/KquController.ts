import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqu")
export default class KquController {
  @operation({
    summary: "Get Kqu",
  })
  @get()
  static getKqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqu",
  })
  @post("{id}")
  static createKqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
