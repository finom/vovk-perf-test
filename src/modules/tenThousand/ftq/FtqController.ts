import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftq")
export default class FtqController {
  @operation({
    summary: "Get Ftq",
  })
  @get()
  static getFtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftq",
  })
  @post("{id}")
  static createFtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
