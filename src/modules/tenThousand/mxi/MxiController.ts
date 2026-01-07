import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxi")
export default class MxiController {
  @operation({
    summary: "Get Mxi",
  })
  @get()
  static getMxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxi",
  })
  @post("{id}")
  static createMxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
