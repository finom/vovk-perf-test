import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzi")
export default class MziController {
  @operation({
    summary: "Get Mzi",
  })
  @get()
  static getMzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzi",
  })
  @post("{id}")
  static createMzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
