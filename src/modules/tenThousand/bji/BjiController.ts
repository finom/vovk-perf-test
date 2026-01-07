import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bji")
export default class BjiController {
  @operation({
    summary: "Get Bji",
  })
  @get()
  static getBji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bji",
  })
  @post("{id}")
  static createBji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
