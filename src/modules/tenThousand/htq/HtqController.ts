import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htq")
export default class HtqController {
  @operation({
    summary: "Get Htq",
  })
  @get()
  static getHtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htq",
  })
  @post("{id}")
  static createHtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
