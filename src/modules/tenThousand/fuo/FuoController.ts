import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuo")
export default class FuoController {
  @operation({
    summary: "Get Fuo",
  })
  @get()
  static getFuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuo",
  })
  @post("{id}")
  static createFuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
