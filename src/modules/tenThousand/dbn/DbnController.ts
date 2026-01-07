import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbn")
export default class DbnController {
  @operation({
    summary: "Get Dbn",
  })
  @get()
  static getDbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbn",
  })
  @post("{id}")
  static createDbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
