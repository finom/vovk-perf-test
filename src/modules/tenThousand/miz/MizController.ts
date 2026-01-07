import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miz")
export default class MizController {
  @operation({
    summary: "Get Miz",
  })
  @get()
  static getMiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Miz",
  })
  @post("{id}")
  static createMiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
