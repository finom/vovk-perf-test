import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpg")
export default class BpgController {
  @operation({
    summary: "Get Bpg",
  })
  @get()
  static getBpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpg",
  })
  @post("{id}")
  static createBpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
