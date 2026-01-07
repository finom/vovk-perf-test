import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxh")
export default class KxhController {
  @operation({
    summary: "Get Kxh",
  })
  @get()
  static getKxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxh",
  })
  @post("{id}")
  static createKxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
