import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neb")
export default class NebController {
  @operation({
    summary: "Get Neb",
  })
  @get()
  static getNeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neb",
  })
  @post("{id}")
  static createNeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
