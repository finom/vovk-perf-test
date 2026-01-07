import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkv")
export default class FkvController {
  @operation({
    summary: "Get Fkv",
  })
  @get()
  static getFkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkv",
  })
  @post("{id}")
  static createFkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
