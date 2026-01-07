import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czy")
export default class CzyController {
  @operation({
    summary: "Get Czy",
  })
  @get()
  static getCzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czy",
  })
  @post("{id}")
  static createCzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
