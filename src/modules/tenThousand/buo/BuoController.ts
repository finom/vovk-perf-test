import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buo")
export default class BuoController {
  @operation({
    summary: "Get Buo",
  })
  @get()
  static getBuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buo",
  })
  @post("{id}")
  static createBuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
