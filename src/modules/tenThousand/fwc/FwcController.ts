import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwc")
export default class FwcController {
  @operation({
    summary: "Get Fwc",
  })
  @get()
  static getFwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwc",
  })
  @post("{id}")
  static createFwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
