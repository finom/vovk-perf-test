import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyh")
export default class HyhController {
  @operation({
    summary: "Get Hyh",
  })
  @get()
  static getHyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyh",
  })
  @post("{id}")
  static createHyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
