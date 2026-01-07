import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpo")
export default class DpoController {
  @operation({
    summary: "Get Dpo",
  })
  @get()
  static getDpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpo",
  })
  @post("{id}")
  static createDpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
