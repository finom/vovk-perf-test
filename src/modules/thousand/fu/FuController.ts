import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fu")
export default class FuController {
  @operation({
    summary: "Get Fu",
  })
  @get()
  static getFu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fu",
  })
  @post("{id}")
  static createFu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
