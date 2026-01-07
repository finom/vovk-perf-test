import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxd")
export default class KxdController {
  @operation({
    summary: "Get Kxd",
  })
  @get()
  static getKxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxd",
  })
  @post("{id}")
  static createKxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
