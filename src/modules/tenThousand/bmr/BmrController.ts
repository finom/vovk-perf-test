import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmr")
export default class BmrController {
  @operation({
    summary: "Get Bmr",
  })
  @get()
  static getBmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmr",
  })
  @post("{id}")
  static createBmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
