import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgt")
export default class LgtController {
  @operation({
    summary: "Get Lgt",
  })
  @get()
  static getLgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgt",
  })
  @post("{id}")
  static createLgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
