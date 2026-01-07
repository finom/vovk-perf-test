import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpb")
export default class GpbController {
  @operation({
    summary: "Get Gpb",
  })
  @get()
  static getGpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpb",
  })
  @post("{id}")
  static createGpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
