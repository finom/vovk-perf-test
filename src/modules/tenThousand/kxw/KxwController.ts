import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxw")
export default class KxwController {
  @operation({
    summary: "Get Kxw",
  })
  @get()
  static getKxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxw",
  })
  @post("{id}")
  static createKxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
