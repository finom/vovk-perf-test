import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtb")
export default class MtbController {
  @operation({
    summary: "Get Mtb",
  })
  @get()
  static getMtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtb",
  })
  @post("{id}")
  static createMtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
