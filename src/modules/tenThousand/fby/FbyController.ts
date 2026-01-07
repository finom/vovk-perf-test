import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fby")
export default class FbyController {
  @operation({
    summary: "Get Fby",
  })
  @get()
  static getFby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fby",
  })
  @post("{id}")
  static createFby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
