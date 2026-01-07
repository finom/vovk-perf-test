import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnu")
export default class FnuController {
  @operation({
    summary: "Get Fnu",
  })
  @get()
  static getFnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnu",
  })
  @post("{id}")
  static createFnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
