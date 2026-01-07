import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfr")
export default class MfrController {
  @operation({
    summary: "Get Mfr",
  })
  @get()
  static getMfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfr",
  })
  @post("{id}")
  static createMfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
