import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvx")
export default class FvxController {
  @operation({
    summary: "Get Fvx",
  })
  @get()
  static getFvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvx",
  })
  @post("{id}")
  static createFvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
