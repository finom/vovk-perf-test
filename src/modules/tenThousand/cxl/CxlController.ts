import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxl")
export default class CxlController {
  @operation({
    summary: "Get Cxl",
  })
  @get()
  static getCxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxl",
  })
  @post("{id}")
  static createCxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
