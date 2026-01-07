import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkt")
export default class FktController {
  @operation({
    summary: "Get Fkt",
  })
  @get()
  static getFkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkt",
  })
  @post("{id}")
  static createFkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
