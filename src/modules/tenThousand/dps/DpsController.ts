import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dps")
export default class DpsController {
  @operation({
    summary: "Get Dps",
  })
  @get()
  static getDps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dps",
  })
  @post("{id}")
  static createDps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
