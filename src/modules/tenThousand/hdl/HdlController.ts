import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdl")
export default class HdlController {
  @operation({
    summary: "Get Hdl",
  })
  @get()
  static getHdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdl",
  })
  @post("{id}")
  static createHdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
