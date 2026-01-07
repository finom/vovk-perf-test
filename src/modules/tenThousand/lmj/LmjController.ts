import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmj")
export default class LmjController {
  @operation({
    summary: "Get Lmj",
  })
  @get()
  static getLmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmj",
  })
  @post("{id}")
  static createLmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
