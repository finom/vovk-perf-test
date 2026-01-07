import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kee")
export default class KeeController {
  @operation({
    summary: "Get Kee",
  })
  @get()
  static getKee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kee",
  })
  @post("{id}")
  static createKee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
