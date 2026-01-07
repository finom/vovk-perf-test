import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mof")
export default class MofController {
  @operation({
    summary: "Get Mof",
  })
  @get()
  static getMof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mof",
  })
  @post("{id}")
  static createMof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
