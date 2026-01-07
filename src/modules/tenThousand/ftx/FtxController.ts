import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftx")
export default class FtxController {
  @operation({
    summary: "Get Ftx",
  })
  @get()
  static getFtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftx",
  })
  @post("{id}")
  static createFtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
