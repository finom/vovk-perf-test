import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxb")
export default class KxbController {
  @operation({
    summary: "Get Kxb",
  })
  @get()
  static getKxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxb",
  })
  @post("{id}")
  static createKxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
