import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsp")
export default class HspController {
  @operation({
    summary: "Get Hsp",
  })
  @get()
  static getHsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsp",
  })
  @post("{id}")
  static createHsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
