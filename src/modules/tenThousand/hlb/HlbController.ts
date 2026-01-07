import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlb")
export default class HlbController {
  @operation({
    summary: "Get Hlb",
  })
  @get()
  static getHlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlb",
  })
  @post("{id}")
  static createHlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
