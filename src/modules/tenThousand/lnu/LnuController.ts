import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnu")
export default class LnuController {
  @operation({
    summary: "Get Lnu",
  })
  @get()
  static getLnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnu",
  })
  @post("{id}")
  static createLnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
