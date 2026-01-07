import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lh")
export default class LhController {
  @operation({
    summary: "Get Lh",
  })
  @get()
  static getLh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lh",
  })
  @post("{id}")
  static createLh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
