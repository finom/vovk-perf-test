import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpy")
export default class HpyController {
  @operation({
    summary: "Get Hpy",
  })
  @get()
  static getHpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpy",
  })
  @post("{id}")
  static createHpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
