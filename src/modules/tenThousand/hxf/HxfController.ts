import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxf")
export default class HxfController {
  @operation({
    summary: "Get Hxf",
  })
  @get()
  static getHxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxf",
  })
  @post("{id}")
  static createHxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
