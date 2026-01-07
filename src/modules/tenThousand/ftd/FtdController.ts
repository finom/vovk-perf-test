import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftd")
export default class FtdController {
  @operation({
    summary: "Get Ftd",
  })
  @get()
  static getFtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftd",
  })
  @post("{id}")
  static createFtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
