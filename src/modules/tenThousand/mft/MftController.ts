import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mft")
export default class MftController {
  @operation({
    summary: "Get Mft",
  })
  @get()
  static getMft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mft",
  })
  @post("{id}")
  static createMft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
