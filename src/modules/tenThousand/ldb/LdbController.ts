import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldb")
export default class LdbController {
  @operation({
    summary: "Get Ldb",
  })
  @get()
  static getLdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldb",
  })
  @post("{id}")
  static createLdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
