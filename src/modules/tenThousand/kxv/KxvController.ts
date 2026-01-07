import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxv")
export default class KxvController {
  @operation({
    summary: "Get Kxv",
  })
  @get()
  static getKxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxv",
  })
  @post("{id}")
  static createKxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
