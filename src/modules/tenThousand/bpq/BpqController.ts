import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpq")
export default class BpqController {
  @operation({
    summary: "Get Bpq",
  })
  @get()
  static getBpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpq",
  })
  @post("{id}")
  static createBpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
