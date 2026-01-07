import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuu")
export default class FuuController {
  @operation({
    summary: "Get Fuu",
  })
  @get()
  static getFuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuu",
  })
  @post("{id}")
  static createFuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
