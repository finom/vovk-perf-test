import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvj")
export default class FvjController {
  @operation({
    summary: "Get Fvj",
  })
  @get()
  static getFvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvj",
  })
  @post("{id}")
  static createFvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
