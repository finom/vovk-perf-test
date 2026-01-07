import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kon")
export default class KonController {
  @operation({
    summary: "Get Kon",
  })
  @get()
  static getKon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kon",
  })
  @post("{id}")
  static createKon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
