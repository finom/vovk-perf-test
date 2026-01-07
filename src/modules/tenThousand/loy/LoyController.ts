import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loy")
export default class LoyController {
  @operation({
    summary: "Get Loy",
  })
  @get()
  static getLoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loy",
  })
  @post("{id}")
  static createLoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
