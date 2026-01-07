import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liz")
export default class LizController {
  @operation({
    summary: "Get Liz",
  })
  @get()
  static getLiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Liz",
  })
  @post("{id}")
  static createLiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
