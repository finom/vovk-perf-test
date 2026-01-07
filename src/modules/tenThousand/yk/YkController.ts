import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yk")
export default class YkController {
  @operation({
    summary: "Get Yk",
  })
  @get()
  static getYk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yk",
  })
  @post("{id}")
  static createYk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
