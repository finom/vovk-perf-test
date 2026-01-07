import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fng")
export default class FngController {
  @operation({
    summary: "Get Fng",
  })
  @get()
  static getFng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fng",
  })
  @post("{id}")
  static createFng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
