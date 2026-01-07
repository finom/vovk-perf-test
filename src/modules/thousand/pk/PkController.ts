import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pk")
export default class PkController {
  @operation({
    summary: "Get Pk",
  })
  @get()
  static getPk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pk",
  })
  @post("{id}")
  static createPk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
