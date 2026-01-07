import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwa")
export default class LwaController {
  @operation({
    summary: "Get Lwa",
  })
  @get()
  static getLwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwa",
  })
  @post("{id}")
  static createLwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
