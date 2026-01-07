import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldd")
export default class LddController {
  @operation({
    summary: "Get Ldd",
  })
  @get()
  static getLdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldd",
  })
  @post("{id}")
  static createLdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
