import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgv")
export default class FgvController {
  @operation({
    summary: "Get Fgv",
  })
  @get()
  static getFgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgv",
  })
  @post("{id}")
  static createFgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
