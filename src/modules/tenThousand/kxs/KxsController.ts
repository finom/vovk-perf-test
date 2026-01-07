import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxs")
export default class KxsController {
  @operation({
    summary: "Get Kxs",
  })
  @get()
  static getKxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxs",
  })
  @post("{id}")
  static createKxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
