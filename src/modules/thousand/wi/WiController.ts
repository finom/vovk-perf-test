import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wi")
export default class WiController {
  @operation({
    summary: "Get Wi",
  })
  @get()
  static getWi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wi",
  })
  @post("{id}")
  static createWi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
