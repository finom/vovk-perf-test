import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftm")
export default class FtmController {
  @operation({
    summary: "Get Ftm",
  })
  @get()
  static getFtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftm",
  })
  @post("{id}")
  static createFtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
