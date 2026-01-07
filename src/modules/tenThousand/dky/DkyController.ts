import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dky")
export default class DkyController {
  @operation({
    summary: "Get Dky",
  })
  @get()
  static getDky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dky",
  })
  @post("{id}")
  static createDky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
