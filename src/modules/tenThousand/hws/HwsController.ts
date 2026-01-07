import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hws")
export default class HwsController {
  @operation({
    summary: "Get Hws",
  })
  @get()
  static getHws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hws",
  })
  @post("{id}")
  static createHws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
