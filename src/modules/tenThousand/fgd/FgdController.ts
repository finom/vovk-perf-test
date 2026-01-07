import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgd")
export default class FgdController {
  @operation({
    summary: "Get Fgd",
  })
  @get()
  static getFgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgd",
  })
  @post("{id}")
  static createFgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
