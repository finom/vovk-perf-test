import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxp")
export default class KxpController {
  @operation({
    summary: "Get Kxp",
  })
  @get()
  static getKxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxp",
  })
  @post("{id}")
  static createKxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
