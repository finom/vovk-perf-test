import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfi")
export default class LfiController {
  @operation({
    summary: "Get Lfi",
  })
  @get()
  static getLfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfi",
  })
  @post("{id}")
  static createLfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
