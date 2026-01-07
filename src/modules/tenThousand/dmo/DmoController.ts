import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmo")
export default class DmoController {
  @operation({
    summary: "Get Dmo",
  })
  @get()
  static getDmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmo",
  })
  @post("{id}")
  static createDmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
