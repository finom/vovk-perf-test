import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyv")
export default class DyvController {
  @operation({
    summary: "Get Dyv",
  })
  @get()
  static getDyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyv",
  })
  @post("{id}")
  static createDyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
