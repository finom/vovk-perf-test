import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mth")
export default class MthController {
  @operation({
    summary: "Get Mth",
  })
  @get()
  static getMth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mth",
  })
  @post("{id}")
  static createMth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
