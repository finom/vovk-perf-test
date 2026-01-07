import { procedure, prefix, get, post, operation } from "vovk";

@prefix("el")
export default class ElController {
  @operation({
    summary: "Get El",
  })
  @get()
  static getEl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create El",
  })
  @post("{id}")
  static createEl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
