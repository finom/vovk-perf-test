import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvy")
export default class DvyController {
  @operation({
    summary: "Get Dvy",
  })
  @get()
  static getDvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvy",
  })
  @post("{id}")
  static createDvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
