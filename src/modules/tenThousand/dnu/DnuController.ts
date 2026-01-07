import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnu")
export default class DnuController {
  @operation({
    summary: "Get Dnu",
  })
  @get()
  static getDnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnu",
  })
  @post("{id}")
  static createDnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
