import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvw")
export default class FvwController {
  @operation({
    summary: "Get Fvw",
  })
  @get()
  static getFvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvw",
  })
  @post("{id}")
  static createFvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
