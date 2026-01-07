import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hds")
export default class HdsController {
  @operation({
    summary: "Get Hds",
  })
  @get()
  static getHds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hds",
  })
  @post("{id}")
  static createHds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
