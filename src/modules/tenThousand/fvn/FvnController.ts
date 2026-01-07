import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvn")
export default class FvnController {
  @operation({
    summary: "Get Fvn",
  })
  @get()
  static getFvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvn",
  })
  @post("{id}")
  static createFvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
