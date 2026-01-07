import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clv")
export default class ClvController {
  @operation({
    summary: "Get Clv",
  })
  @get()
  static getClv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clv",
  })
  @post("{id}")
  static createClv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
