import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkz")
export default class FkzController {
  @operation({
    summary: "Get Fkz",
  })
  @get()
  static getFkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkz",
  })
  @post("{id}")
  static createFkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
