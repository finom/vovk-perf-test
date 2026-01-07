import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltc")
export default class LtcController {
  @operation({
    summary: "Get Ltc",
  })
  @get()
  static getLtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltc",
  })
  @post("{id}")
  static createLtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
