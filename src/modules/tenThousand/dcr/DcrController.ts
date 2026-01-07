import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcr")
export default class DcrController {
  @operation({
    summary: "Get Dcr",
  })
  @get()
  static getDcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcr",
  })
  @post("{id}")
  static createDcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
