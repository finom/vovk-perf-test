import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixl")
export default class IxlController {
  @operation({
    summary: "Get Ixl",
  })
  @get()
  static getIxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixl",
  })
  @post("{id}")
  static createIxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
