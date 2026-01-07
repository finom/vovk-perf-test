import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpb")
export default class BpbController {
  @operation({
    summary: "Get Bpb",
  })
  @get()
  static getBpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpb",
  })
  @post("{id}")
  static createBpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
