import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpz")
export default class DpzController {
  @operation({
    summary: "Get Dpz",
  })
  @get()
  static getDpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpz",
  })
  @post("{id}")
  static createDpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
