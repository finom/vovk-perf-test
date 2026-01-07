import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fg")
export default class FgController {
  @operation({
    summary: "Get Fg",
  })
  @get()
  static getFg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fg",
  })
  @post("{id}")
  static createFg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
