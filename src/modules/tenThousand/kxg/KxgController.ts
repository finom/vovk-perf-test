import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxg")
export default class KxgController {
  @operation({
    summary: "Get Kxg",
  })
  @get()
  static getKxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxg",
  })
  @post("{id}")
  static createKxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
