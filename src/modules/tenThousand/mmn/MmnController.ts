import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmn")
export default class MmnController {
  @operation({
    summary: "Get Mmn",
  })
  @get()
  static getMmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmn",
  })
  @post("{id}")
  static createMmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
