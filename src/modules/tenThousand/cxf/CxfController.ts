import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxf")
export default class CxfController {
  @operation({
    summary: "Get Cxf",
  })
  @get()
  static getCxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxf",
  })
  @post("{id}")
  static createCxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
