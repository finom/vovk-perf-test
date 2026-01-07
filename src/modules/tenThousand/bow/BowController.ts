import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bow")
export default class BowController {
  @operation({
    summary: "Get Bow",
  })
  @get()
  static getBow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bow",
  })
  @post("{id}")
  static createBow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
