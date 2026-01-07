import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lft")
export default class LftController {
  @operation({
    summary: "Get Lft",
  })
  @get()
  static getLft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lft",
  })
  @post("{id}")
  static createLft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
