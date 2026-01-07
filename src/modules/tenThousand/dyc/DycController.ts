import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyc")
export default class DycController {
  @operation({
    summary: "Get Dyc",
  })
  @get()
  static getDyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyc",
  })
  @post("{id}")
  static createDyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
