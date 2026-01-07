import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hks")
export default class HksController {
  @operation({
    summary: "Get Hks",
  })
  @get()
  static getHks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hks",
  })
  @post("{id}")
  static createHks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
