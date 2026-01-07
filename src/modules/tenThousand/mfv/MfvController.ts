import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfv")
export default class MfvController {
  @operation({
    summary: "Get Mfv",
  })
  @get()
  static getMfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfv",
  })
  @post("{id}")
  static createMfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
