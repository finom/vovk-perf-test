import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsf")
export default class DsfController {
  @operation({
    summary: "Get Dsf",
  })
  @get()
  static getDsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsf",
  })
  @post("{id}")
  static createDsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
