import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ify")
export default class IfyController {
  @operation({
    summary: "Get Ify",
  })
  @get()
  static getIfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ify",
  })
  @post("{id}")
  static createIfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
