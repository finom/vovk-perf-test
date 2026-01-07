import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htg")
export default class HtgController {
  @operation({
    summary: "Get Htg",
  })
  @get()
  static getHtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htg",
  })
  @post("{id}")
  static createHtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
