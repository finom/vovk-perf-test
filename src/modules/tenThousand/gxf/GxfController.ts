import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxf")
export default class GxfController {
  @operation({
    summary: "Get Gxf",
  })
  @get()
  static getGxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxf",
  })
  @post("{id}")
  static createGxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
