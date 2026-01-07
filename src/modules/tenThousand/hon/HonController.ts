import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hon")
export default class HonController {
  @operation({
    summary: "Get Hon",
  })
  @get()
  static getHon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hon",
  })
  @post("{id}")
  static createHon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
