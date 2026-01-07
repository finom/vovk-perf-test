import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxz")
export default class KxzController {
  @operation({
    summary: "Get Kxz",
  })
  @get()
  static getKxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxz",
  })
  @post("{id}")
  static createKxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
