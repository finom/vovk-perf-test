import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nix")
export default class NixController {
  @operation({
    summary: "Get Nix",
  })
  @get()
  static getNix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nix",
  })
  @post("{id}")
  static createNix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
