import { procedure, prefix, get, post, operation } from "vovk";

@prefix("det")
export default class DetController {
  @operation({
    summary: "Get Det",
  })
  @get()
  static getDet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Det",
  })
  @post("{id}")
  static createDet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
