import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzb")
export default class HzbController {
  @operation({
    summary: "Get Hzb",
  })
  @get()
  static getHzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzb",
  })
  @post("{id}")
  static createHzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
