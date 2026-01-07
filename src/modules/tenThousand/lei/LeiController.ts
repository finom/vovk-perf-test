import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lei")
export default class LeiController {
  @operation({
    summary: "Get Lei",
  })
  @get()
  static getLei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lei",
  })
  @post("{id}")
  static createLei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
