import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bas")
export default class BasController {
  @operation({
    summary: "Get Bas",
  })
  @get()
  static getBas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bas",
  })
  @post("{id}")
  static createBas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
