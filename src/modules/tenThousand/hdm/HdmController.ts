import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdm")
export default class HdmController {
  @operation({
    summary: "Get Hdm",
  })
  @get()
  static getHdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdm",
  })
  @post("{id}")
  static createHdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
