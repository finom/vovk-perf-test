import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lz")
export default class LzController {
  @operation({
    summary: "Get Lz",
  })
  @get()
  static getLz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lz",
  })
  @post("{id}")
  static createLz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
