import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loe")
export default class LoeController {
  @operation({
    summary: "Get Loe",
  })
  @get()
  static getLoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loe",
  })
  @post("{id}")
  static createLoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
