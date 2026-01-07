import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elv")
export default class ElvController {
  @operation({
    summary: "Get Elv",
  })
  @get()
  static getElv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elv",
  })
  @post("{id}")
  static createElv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
