import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgm")
export default class FgmController {
  @operation({
    summary: "Get Fgm",
  })
  @get()
  static getFgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgm",
  })
  @post("{id}")
  static createFgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
