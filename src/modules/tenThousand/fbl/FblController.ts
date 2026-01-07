import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbl")
export default class FblController {
  @operation({
    summary: "Get Fbl",
  })
  @get()
  static getFbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbl",
  })
  @post("{id}")
  static createFbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
