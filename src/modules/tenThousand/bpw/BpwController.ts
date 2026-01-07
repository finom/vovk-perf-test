import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpw")
export default class BpwController {
  @operation({
    summary: "Get Bpw",
  })
  @get()
  static getBpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpw",
  })
  @post("{id}")
  static createBpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
