import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyw")
export default class HywController {
  @operation({
    summary: "Get Hyw",
  })
  @get()
  static getHyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyw",
  })
  @post("{id}")
  static createHyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
