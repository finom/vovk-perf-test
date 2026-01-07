import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewx")
export default class EwxController {
  @operation({
    summary: "Get Ewx",
  })
  @get()
  static getEwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewx",
  })
  @post("{id}")
  static createEwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
