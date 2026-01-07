import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtd")
export default class GtdController {
  @operation({
    summary: "Get Gtd",
  })
  @get()
  static getGtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtd",
  })
  @post("{id}")
  static createGtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
