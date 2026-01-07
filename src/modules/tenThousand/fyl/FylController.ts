import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyl")
export default class FylController {
  @operation({
    summary: "Get Fyl",
  })
  @get()
  static getFyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyl",
  })
  @post("{id}")
  static createFyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
