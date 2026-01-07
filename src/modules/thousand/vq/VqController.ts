import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vq")
export default class VqController {
  @operation({
    summary: "Get Vq",
  })
  @get()
  static getVq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vq",
  })
  @post("{id}")
  static createVq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
