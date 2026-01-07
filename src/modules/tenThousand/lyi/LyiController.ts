import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyi")
export default class LyiController {
  @operation({
    summary: "Get Lyi",
  })
  @get()
  static getLyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyi",
  })
  @post("{id}")
  static createLyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
