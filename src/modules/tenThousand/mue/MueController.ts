import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mue")
export default class MueController {
  @operation({
    summary: "Get Mue",
  })
  @get()
  static getMue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mue",
  })
  @post("{id}")
  static createMue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
