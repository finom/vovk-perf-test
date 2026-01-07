import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctl")
export default class CtlController {
  @operation({
    summary: "Get Ctl",
  })
  @get()
  static getCtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctl",
  })
  @post("{id}")
  static createCtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
