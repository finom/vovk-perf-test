import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvd")
export default class FvdController {
  @operation({
    summary: "Get Fvd",
  })
  @get()
  static getFvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvd",
  })
  @post("{id}")
  static createFvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
