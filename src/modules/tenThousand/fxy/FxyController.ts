import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxy")
export default class FxyController {
  @operation({
    summary: "Get Fxy",
  })
  @get()
  static getFxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxy",
  })
  @post("{id}")
  static createFxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
