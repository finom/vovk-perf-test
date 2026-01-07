import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inv")
export default class InvController {
  @operation({
    summary: "Get Inv",
  })
  @get()
  static getInv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inv",
  })
  @post("{id}")
  static createInv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
