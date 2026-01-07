import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsu")
export default class LsuController {
  @operation({
    summary: "Get Lsu",
  })
  @get()
  static getLsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsu",
  })
  @post("{id}")
  static createLsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
