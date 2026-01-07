import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctd")
export default class CtdController {
  @operation({
    summary: "Get Ctd",
  })
  @get()
  static getCtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctd",
  })
  @post("{id}")
  static createCtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
