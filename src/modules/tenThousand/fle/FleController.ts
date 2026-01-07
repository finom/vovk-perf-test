import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fle")
export default class FleController {
  @operation({
    summary: "Get Fle",
  })
  @get()
  static getFle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fle",
  })
  @post("{id}")
  static createFle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
