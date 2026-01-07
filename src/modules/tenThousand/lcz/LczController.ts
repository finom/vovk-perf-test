import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcz")
export default class LczController {
  @operation({
    summary: "Get Lcz",
  })
  @get()
  static getLcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcz",
  })
  @post("{id}")
  static createLcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
