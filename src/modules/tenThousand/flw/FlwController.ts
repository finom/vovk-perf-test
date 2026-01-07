import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flw")
export default class FlwController {
  @operation({
    summary: "Get Flw",
  })
  @get()
  static getFlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flw",
  })
  @post("{id}")
  static createFlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
