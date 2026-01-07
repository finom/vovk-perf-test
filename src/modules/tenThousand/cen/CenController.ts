import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cen")
export default class CenController {
  @operation({
    summary: "Get Cen",
  })
  @get()
  static getCen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cen",
  })
  @post("{id}")
  static createCen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
