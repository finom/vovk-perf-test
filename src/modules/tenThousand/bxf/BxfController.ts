import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxf")
export default class BxfController {
  @operation({
    summary: "Get Bxf",
  })
  @get()
  static getBxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxf",
  })
  @post("{id}")
  static createBxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
