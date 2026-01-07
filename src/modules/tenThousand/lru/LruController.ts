import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lru")
export default class LruController {
  @operation({
    summary: "Get Lru",
  })
  @get()
  static getLru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lru",
  })
  @post("{id}")
  static createLru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
