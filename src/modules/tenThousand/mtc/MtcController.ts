import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtc")
export default class MtcController {
  @operation({
    summary: "Get Mtc",
  })
  @get()
  static getMtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtc",
  })
  @post("{id}")
  static createMtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
