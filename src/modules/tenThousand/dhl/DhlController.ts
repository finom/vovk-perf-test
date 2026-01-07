import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhl")
export default class DhlController {
  @operation({
    summary: "Get Dhl",
  })
  @get()
  static getDhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhl",
  })
  @post("{id}")
  static createDhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
