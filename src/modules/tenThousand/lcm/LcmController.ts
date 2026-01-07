import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcm")
export default class LcmController {
  @operation({
    summary: "Get Lcm",
  })
  @get()
  static getLcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcm",
  })
  @post("{id}")
  static createLcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
