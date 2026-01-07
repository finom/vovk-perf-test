import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdd")
export default class MddController {
  @operation({
    summary: "Get Mdd",
  })
  @get()
  static getMdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdd",
  })
  @post("{id}")
  static createMdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
