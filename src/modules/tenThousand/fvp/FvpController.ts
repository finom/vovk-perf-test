import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvp")
export default class FvpController {
  @operation({
    summary: "Get Fvp",
  })
  @get()
  static getFvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvp",
  })
  @post("{id}")
  static createFvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
