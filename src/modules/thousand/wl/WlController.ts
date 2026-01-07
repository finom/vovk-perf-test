import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wl")
export default class WlController {
  @operation({
    summary: "Get Wl",
  })
  @get()
  static getWl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wl",
  })
  @post("{id}")
  static createWl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
