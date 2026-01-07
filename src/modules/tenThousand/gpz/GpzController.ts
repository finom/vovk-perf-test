import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpz")
export default class GpzController {
  @operation({
    summary: "Get Gpz",
  })
  @get()
  static getGpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpz",
  })
  @post("{id}")
  static createGpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
