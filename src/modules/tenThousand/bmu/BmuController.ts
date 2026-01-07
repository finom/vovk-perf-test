import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmu")
export default class BmuController {
  @operation({
    summary: "Get Bmu",
  })
  @get()
  static getBmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmu",
  })
  @post("{id}")
  static createBmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
