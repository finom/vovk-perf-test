import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsq")
export default class DsqController {
  @operation({
    summary: "Get Dsq",
  })
  @get()
  static getDsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsq",
  })
  @post("{id}")
  static createDsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
