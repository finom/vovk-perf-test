import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxq")
export default class KxqController {
  @operation({
    summary: "Get Kxq",
  })
  @get()
  static getKxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxq",
  })
  @post("{id}")
  static createKxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
