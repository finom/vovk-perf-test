import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpz")
export default class BpzController {
  @operation({
    summary: "Get Bpz",
  })
  @get()
  static getBpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpz",
  })
  @post("{id}")
  static createBpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
