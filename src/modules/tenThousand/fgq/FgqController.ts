import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgq")
export default class FgqController {
  @operation({
    summary: "Get Fgq",
  })
  @get()
  static getFgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgq",
  })
  @post("{id}")
  static createFgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
