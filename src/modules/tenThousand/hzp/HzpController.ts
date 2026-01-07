import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzp")
export default class HzpController {
  @operation({
    summary: "Get Hzp",
  })
  @get()
  static getHzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzp",
  })
  @post("{id}")
  static createHzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
