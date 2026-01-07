import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnv")
export default class DnvController {
  @operation({
    summary: "Get Dnv",
  })
  @get()
  static getDnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnv",
  })
  @post("{id}")
  static createDnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
