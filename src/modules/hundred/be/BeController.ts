import { procedure, prefix, get, post, operation } from "vovk";

@prefix("be")
export default class BeController {
  @operation({
    summary: "Get Be",
  })
  @get()
  static getBe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Be",
  })
  @post("{id}")
  static createBe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
