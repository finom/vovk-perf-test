import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bi")
export default class BiController {
  @operation({
    summary: "Get Bi",
  })
  @get()
  static getBi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bi",
  })
  @post("{id}")
  static createBi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
