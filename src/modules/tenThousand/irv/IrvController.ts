import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irv")
export default class IrvController {
  @operation({
    summary: "Get Irv",
  })
  @get()
  static getIrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irv",
  })
  @post("{id}")
  static createIrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
