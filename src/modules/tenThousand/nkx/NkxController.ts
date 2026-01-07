import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkx")
export default class NkxController {
  @operation({
    summary: "Get Nkx",
  })
  @get()
  static getNkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkx",
  })
  @post("{id}")
  static createNkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
