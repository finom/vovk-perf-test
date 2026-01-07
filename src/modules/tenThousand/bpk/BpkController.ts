import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpk")
export default class BpkController {
  @operation({
    summary: "Get Bpk",
  })
  @get()
  static getBpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpk",
  })
  @post("{id}")
  static createBpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
