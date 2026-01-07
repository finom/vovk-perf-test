import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mak")
export default class MakController {
  @operation({
    summary: "Get Mak",
  })
  @get()
  static getMak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mak",
  })
  @post("{id}")
  static createMak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
