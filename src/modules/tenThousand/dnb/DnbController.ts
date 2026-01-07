import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnb")
export default class DnbController {
  @operation({
    summary: "Get Dnb",
  })
  @get()
  static getDnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnb",
  })
  @post("{id}")
  static createDnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
