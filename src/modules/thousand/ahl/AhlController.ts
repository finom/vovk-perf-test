import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahl")
export default class AhlController {
  @operation({
    summary: "Get Ahl",
  })
  @get()
  static getAhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahl",
  })
  @post("{id}")
  static createAhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
