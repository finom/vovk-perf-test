import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixf")
export default class IxfController {
  @operation({
    summary: "Get Ixf",
  })
  @get()
  static getIxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixf",
  })
  @post("{id}")
  static createIxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
