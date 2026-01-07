import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxn")
export default class KxnController {
  @operation({
    summary: "Get Kxn",
  })
  @get()
  static getKxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxn",
  })
  @post("{id}")
  static createKxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
