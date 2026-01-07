import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mut")
export default class MutController {
  @operation({
    summary: "Get Mut",
  })
  @get()
  static getMut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mut",
  })
  @post("{id}")
  static createMut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
