import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yr")
export default class YrController {
  @operation({
    summary: "Get Yr",
  })
  @get()
  static getYr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yr",
  })
  @post("{id}")
  static createYr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
