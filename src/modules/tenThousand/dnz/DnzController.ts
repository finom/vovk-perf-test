import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnz")
export default class DnzController {
  @operation({
    summary: "Get Dnz",
  })
  @get()
  static getDnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnz",
  })
  @post("{id}")
  static createDnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
