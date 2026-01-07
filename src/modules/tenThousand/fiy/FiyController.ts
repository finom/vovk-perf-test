import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiy")
export default class FiyController {
  @operation({
    summary: "Get Fiy",
  })
  @get()
  static getFiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiy",
  })
  @post("{id}")
  static createFiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
