import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmu")
export default class DmuController {
  @operation({
    summary: "Get Dmu",
  })
  @get()
  static getDmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmu",
  })
  @post("{id}")
  static createDmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
