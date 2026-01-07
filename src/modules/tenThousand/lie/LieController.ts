import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lie")
export default class LieController {
  @operation({
    summary: "Get Lie",
  })
  @get()
  static getLie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lie",
  })
  @post("{id}")
  static createLie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
