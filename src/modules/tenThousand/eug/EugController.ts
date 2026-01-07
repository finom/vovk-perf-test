import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eug")
export default class EugController {
  @operation({
    summary: "Get Eug",
  })
  @get()
  static getEug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eug",
  })
  @post("{id}")
  static createEug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
