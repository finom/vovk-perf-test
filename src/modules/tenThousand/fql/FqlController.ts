import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fql")
export default class FqlController {
  @operation({
    summary: "Get Fql",
  })
  @get()
  static getFql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fql",
  })
  @post("{id}")
  static createFql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
