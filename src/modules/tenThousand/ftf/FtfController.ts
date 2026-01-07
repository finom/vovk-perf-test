import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftf")
export default class FtfController {
  @operation({
    summary: "Get Ftf",
  })
  @get()
  static getFtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftf",
  })
  @post("{id}")
  static createFtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
