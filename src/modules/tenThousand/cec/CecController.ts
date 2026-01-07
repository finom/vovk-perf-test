import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cec")
export default class CecController {
  @operation({
    summary: "Get Cec",
  })
  @get()
  static getCec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cec",
  })
  @post("{id}")
  static createCec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
