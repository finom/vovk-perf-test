import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dat")
export default class DatController {
  @operation({
    summary: "Get Dat",
  })
  @get()
  static getDat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dat",
  })
  @post("{id}")
  static createDat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
