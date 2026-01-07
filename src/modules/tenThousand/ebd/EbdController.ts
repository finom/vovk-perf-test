import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebd")
export default class EbdController {
  @operation({
    summary: "Get Ebd",
  })
  @get()
  static getEbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebd",
  })
  @post("{id}")
  static createEbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
