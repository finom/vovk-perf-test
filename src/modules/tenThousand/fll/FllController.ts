import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fll")
export default class FllController {
  @operation({
    summary: "Get Fll",
  })
  @get()
  static getFll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fll",
  })
  @post("{id}")
  static createFll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
