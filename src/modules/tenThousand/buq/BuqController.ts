import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buq")
export default class BuqController {
  @operation({
    summary: "Get Buq",
  })
  @get()
  static getBuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buq",
  })
  @post("{id}")
  static createBuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
