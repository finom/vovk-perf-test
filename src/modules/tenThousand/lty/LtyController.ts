import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lty")
export default class LtyController {
  @operation({
    summary: "Get Lty",
  })
  @get()
  static getLty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lty",
  })
  @post("{id}")
  static createLty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
