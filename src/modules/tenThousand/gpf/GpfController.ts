import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpf")
export default class GpfController {
  @operation({
    summary: "Get Gpf",
  })
  @get()
  static getGpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpf",
  })
  @post("{id}")
  static createGpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
