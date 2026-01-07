import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwa")
export default class DwaController {
  @operation({
    summary: "Get Dwa",
  })
  @get()
  static getDwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwa",
  })
  @post("{id}")
  static createDwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
