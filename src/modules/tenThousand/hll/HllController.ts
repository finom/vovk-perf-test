import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hll")
export default class HllController {
  @operation({
    summary: "Get Hll",
  })
  @get()
  static getHll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hll",
  })
  @post("{id}")
  static createHll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
