import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiv")
export default class FivController {
  @operation({
    summary: "Get Fiv",
  })
  @get()
  static getFiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiv",
  })
  @post("{id}")
  static createFiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
