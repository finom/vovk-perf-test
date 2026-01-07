import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwo")
export default class MwoController {
  @operation({
    summary: "Get Mwo",
  })
  @get()
  static getMwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwo",
  })
  @post("{id}")
  static createMwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
