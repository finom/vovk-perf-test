import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mla")
export default class MlaController {
  @operation({
    summary: "Get Mla",
  })
  @get()
  static getMla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mla",
  })
  @post("{id}")
  static createMla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
