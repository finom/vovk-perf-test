import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwc")
export default class CwcController {
  @operation({
    summary: "Get Cwc",
  })
  @get()
  static getCwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwc",
  })
  @post("{id}")
  static createCwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
