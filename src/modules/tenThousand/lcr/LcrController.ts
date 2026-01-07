import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcr")
export default class LcrController {
  @operation({
    summary: "Get Lcr",
  })
  @get()
  static getLcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcr",
  })
  @post("{id}")
  static createLcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
