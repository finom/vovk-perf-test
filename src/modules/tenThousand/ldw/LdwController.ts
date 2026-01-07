import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldw")
export default class LdwController {
  @operation({
    summary: "Get Ldw",
  })
  @get()
  static getLdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldw",
  })
  @post("{id}")
  static createLdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
