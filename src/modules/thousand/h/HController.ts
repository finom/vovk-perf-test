import { procedure, prefix, get, post, operation } from "vovk";

@prefix("h")
export default class HController {
  @operation({
    summary: "Get H",
  })
  @get()
  static getH = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create H",
  })
  @post("{id}")
  static createH = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
