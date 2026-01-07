import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnu")
export default class NnuController {
  @operation({
    summary: "Get Nnu",
  })
  @get()
  static getNnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnu",
  })
  @post("{id}")
  static createNnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
