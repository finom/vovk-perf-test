import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftg")
export default class FtgController {
  @operation({
    summary: "Get Ftg",
  })
  @get()
  static getFtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftg",
  })
  @post("{id}")
  static createFtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
