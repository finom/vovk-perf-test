import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ll")
export default class LlController {
  @operation({
    summary: "Get Ll",
  })
  @get()
  static getLl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ll",
  })
  @post("{id}")
  static createLl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
