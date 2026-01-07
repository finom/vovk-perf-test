import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnl")
export default class GnlController {
  @operation({
    summary: "Get Gnl",
  })
  @get()
  static getGnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnl",
  })
  @post("{id}")
  static createGnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
