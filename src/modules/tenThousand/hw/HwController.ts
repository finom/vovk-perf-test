import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hw")
export default class HwController {
  @operation({
    summary: "Get Hw",
  })
  @get()
  static getHw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hw",
  })
  @post("{id}")
  static createHw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
