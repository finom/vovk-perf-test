import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgc")
export default class FgcController {
  @operation({
    summary: "Get Fgc",
  })
  @get()
  static getFgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgc",
  })
  @post("{id}")
  static createFgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
