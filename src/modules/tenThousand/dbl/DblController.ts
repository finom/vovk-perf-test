import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbl")
export default class DblController {
  @operation({
    summary: "Get Dbl",
  })
  @get()
  static getDbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbl",
  })
  @post("{id}")
  static createDbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
