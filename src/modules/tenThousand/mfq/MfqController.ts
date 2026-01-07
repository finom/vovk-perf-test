import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfq")
export default class MfqController {
  @operation({
    summary: "Get Mfq",
  })
  @get()
  static getMfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfq",
  })
  @post("{id}")
  static createMfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
