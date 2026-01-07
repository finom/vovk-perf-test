import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmh")
export default class LmhController {
  @operation({
    summary: "Get Lmh",
  })
  @get()
  static getLmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmh",
  })
  @post("{id}")
  static createLmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
