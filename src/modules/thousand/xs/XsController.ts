import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xs")
export default class XsController {
  @operation({
    summary: "Get Xs",
  })
  @get()
  static getXs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xs",
  })
  @post("{id}")
  static createXs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
