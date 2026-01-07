import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lg")
export default class LgController {
  @operation({
    summary: "Get Lg",
  })
  @get()
  static getLg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lg",
  })
  @post("{id}")
  static createLg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
