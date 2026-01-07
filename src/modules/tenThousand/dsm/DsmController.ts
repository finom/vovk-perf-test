import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsm")
export default class DsmController {
  @operation({
    summary: "Get Dsm",
  })
  @get()
  static getDsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsm",
  })
  @post("{id}")
  static createDsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
