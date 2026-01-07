import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvq")
export default class FvqController {
  @operation({
    summary: "Get Fvq",
  })
  @get()
  static getFvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvq",
  })
  @post("{id}")
  static createFvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
