import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfn")
export default class MfnController {
  @operation({
    summary: "Get Mfn",
  })
  @get()
  static getMfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfn",
  })
  @post("{id}")
  static createMfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
