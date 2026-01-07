import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpq")
export default class GpqController {
  @operation({
    summary: "Get Gpq",
  })
  @get()
  static getGpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpq",
  })
  @post("{id}")
  static createGpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
