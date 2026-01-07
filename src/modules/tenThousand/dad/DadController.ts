import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dad")
export default class DadController {
  @operation({
    summary: "Get Dad",
  })
  @get()
  static getDad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dad",
  })
  @post("{id}")
  static createDad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
