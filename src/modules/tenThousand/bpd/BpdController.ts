import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpd")
export default class BpdController {
  @operation({
    summary: "Get Bpd",
  })
  @get()
  static getBpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpd",
  })
  @post("{id}")
  static createBpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
