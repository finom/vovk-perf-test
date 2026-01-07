import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhr")
export default class DhrController {
  @operation({
    summary: "Get Dhr",
  })
  @get()
  static getDhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhr",
  })
  @post("{id}")
  static createDhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
