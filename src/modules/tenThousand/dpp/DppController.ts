import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpp")
export default class DppController {
  @operation({
    summary: "Get Dpp",
  })
  @get()
  static getDpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpp",
  })
  @post("{id}")
  static createDpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
