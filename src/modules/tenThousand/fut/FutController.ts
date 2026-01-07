import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fut")
export default class FutController {
  @operation({
    summary: "Get Fut",
  })
  @get()
  static getFut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fut",
  })
  @post("{id}")
  static createFut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
