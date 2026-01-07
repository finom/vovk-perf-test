import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brq")
export default class BrqController {
  @operation({
    summary: "Get Brq",
  })
  @get()
  static getBrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brq",
  })
  @post("{id}")
  static createBrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
