import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byi")
export default class ByiController {
  @operation({
    summary: "Get Byi",
  })
  @get()
  static getByi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byi",
  })
  @post("{id}")
  static createByi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
