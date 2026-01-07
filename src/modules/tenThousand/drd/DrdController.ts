import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drd")
export default class DrdController {
  @operation({
    summary: "Get Drd",
  })
  @get()
  static getDrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drd",
  })
  @post("{id}")
  static createDrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
