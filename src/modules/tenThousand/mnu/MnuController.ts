import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnu")
export default class MnuController {
  @operation({
    summary: "Get Mnu",
  })
  @get()
  static getMnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnu",
  })
  @post("{id}")
  static createMnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
