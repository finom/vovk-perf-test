import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duf")
export default class DufController {
  @operation({
    summary: "Get Duf",
  })
  @get()
  static getDuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duf",
  })
  @post("{id}")
  static createDuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
