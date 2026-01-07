import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpx")
export default class BpxController {
  @operation({
    summary: "Get Bpx",
  })
  @get()
  static getBpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpx",
  })
  @post("{id}")
  static createBpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
