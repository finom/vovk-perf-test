import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hm")
export default class HmController {
  @operation({
    summary: "Get Hm",
  })
  @get()
  static getHm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hm",
  })
  @post("{id}")
  static createHm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
