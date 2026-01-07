import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nt")
export default class NtController {
  @operation({
    summary: "Get Nt",
  })
  @get()
  static getNt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nt",
  })
  @post("{id}")
  static createNt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
