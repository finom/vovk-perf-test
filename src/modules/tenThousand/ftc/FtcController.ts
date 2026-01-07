import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftc")
export default class FtcController {
  @operation({
    summary: "Get Ftc",
  })
  @get()
  static getFtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftc",
  })
  @post("{id}")
  static createFtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
