import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzf")
export default class HzfController {
  @operation({
    summary: "Get Hzf",
  })
  @get()
  static getHzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzf",
  })
  @post("{id}")
  static createHzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
