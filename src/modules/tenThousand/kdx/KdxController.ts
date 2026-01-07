import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdx")
export default class KdxController {
  @operation({
    summary: "Get Kdx",
  })
  @get()
  static getKdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdx",
  })
  @post("{id}")
  static createKdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
