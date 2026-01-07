import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyi")
export default class FyiController {
  @operation({
    summary: "Get Fyi",
  })
  @get()
  static getFyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyi",
  })
  @post("{id}")
  static createFyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
