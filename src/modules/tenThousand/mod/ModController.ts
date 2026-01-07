import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mod")
export default class ModController {
  @operation({
    summary: "Get Mod",
  })
  @get()
  static getMod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mod",
  })
  @post("{id}")
  static createMod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
