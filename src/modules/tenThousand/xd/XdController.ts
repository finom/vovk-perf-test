import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xd")
export default class XdController {
  @operation({
    summary: "Get Xd",
  })
  @get()
  static getXd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xd",
  })
  @post("{id}")
  static createXd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
