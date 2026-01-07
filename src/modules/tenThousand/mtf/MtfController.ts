import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtf")
export default class MtfController {
  @operation({
    summary: "Get Mtf",
  })
  @get()
  static getMtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtf",
  })
  @post("{id}")
  static createMtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
