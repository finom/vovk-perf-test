import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftb")
export default class FtbController {
  @operation({
    summary: "Get Ftb",
  })
  @get()
  static getFtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftb",
  })
  @post("{id}")
  static createFtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
