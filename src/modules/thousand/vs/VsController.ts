import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vs")
export default class VsController {
  @operation({
    summary: "Get Vs",
  })
  @get()
  static getVs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vs",
  })
  @post("{id}")
  static createVs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
