import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqu")
export default class MquController {
  @operation({
    summary: "Get Mqu",
  })
  @get()
  static getMqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqu",
  })
  @post("{id}")
  static createMqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
