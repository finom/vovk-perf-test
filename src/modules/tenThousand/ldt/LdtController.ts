import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldt")
export default class LdtController {
  @operation({
    summary: "Get Ldt",
  })
  @get()
  static getLdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldt",
  })
  @post("{id}")
  static createLdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
