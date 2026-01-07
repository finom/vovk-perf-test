import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hht")
export default class HhtController {
  @operation({
    summary: "Get Hht",
  })
  @get()
  static getHht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hht",
  })
  @post("{id}")
  static createHht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
