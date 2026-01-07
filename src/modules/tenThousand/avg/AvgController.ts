import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avg")
export default class AvgController {
  @operation({
    summary: "Get Avg",
  })
  @get()
  static getAvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avg",
  })
  @post("{id}")
  static createAvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
