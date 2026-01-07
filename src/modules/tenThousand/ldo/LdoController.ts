import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldo")
export default class LdoController {
  @operation({
    summary: "Get Ldo",
  })
  @get()
  static getLdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldo",
  })
  @post("{id}")
  static createLdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
