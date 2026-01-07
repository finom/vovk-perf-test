import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqu")
export default class FquController {
  @operation({
    summary: "Get Fqu",
  })
  @get()
  static getFqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqu",
  })
  @post("{id}")
  static createFqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
