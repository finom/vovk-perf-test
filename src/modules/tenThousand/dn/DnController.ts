import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dn")
export default class DnController {
  @operation({
    summary: "Get Dn",
  })
  @get()
  static getDn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dn",
  })
  @post("{id}")
  static createDn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
