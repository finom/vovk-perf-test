import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htb")
export default class HtbController {
  @operation({
    summary: "Get Htb",
  })
  @get()
  static getHtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htb",
  })
  @post("{id}")
  static createHtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
