import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddn")
export default class DdnController {
  @operation({
    summary: "Get Ddn",
  })
  @get()
  static getDdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddn",
  })
  @post("{id}")
  static createDdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
