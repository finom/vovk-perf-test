import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fny")
export default class FnyController {
  @operation({
    summary: "Get Fny",
  })
  @get()
  static getFny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fny",
  })
  @post("{id}")
  static createFny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
