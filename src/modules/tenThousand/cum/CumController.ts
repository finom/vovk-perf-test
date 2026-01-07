import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cum")
export default class CumController {
  @operation({
    summary: "Get Cum",
  })
  @get()
  static getCum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cum",
  })
  @post("{id}")
  static createCum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
