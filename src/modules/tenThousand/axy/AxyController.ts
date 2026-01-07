import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axy")
export default class AxyController {
  @operation({
    summary: "Get Axy",
  })
  @get()
  static getAxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axy",
  })
  @post("{id}")
  static createAxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
