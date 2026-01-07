import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmn")
export default class LmnController {
  @operation({
    summary: "Get Lmn",
  })
  @get()
  static getLmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmn",
  })
  @post("{id}")
  static createLmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
