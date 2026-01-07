import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgf")
export default class FgfController {
  @operation({
    summary: "Get Fgf",
  })
  @get()
  static getFgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgf",
  })
  @post("{id}")
  static createFgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
