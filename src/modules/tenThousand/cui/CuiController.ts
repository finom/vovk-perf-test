import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cui")
export default class CuiController {
  @operation({
    summary: "Get Cui",
  })
  @get()
  static getCui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cui",
  })
  @post("{id}")
  static createCui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
