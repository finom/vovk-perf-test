import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muo")
export default class MuoController {
  @operation({
    summary: "Get Muo",
  })
  @get()
  static getMuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muo",
  })
  @post("{id}")
  static createMuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
