import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxj")
export default class KxjController {
  @operation({
    summary: "Get Kxj",
  })
  @get()
  static getKxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxj",
  })
  @post("{id}")
  static createKxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
