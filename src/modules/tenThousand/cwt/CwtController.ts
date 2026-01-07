import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwt")
export default class CwtController {
  @operation({
    summary: "Get Cwt",
  })
  @get()
  static getCwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwt",
  })
  @post("{id}")
  static createCwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
