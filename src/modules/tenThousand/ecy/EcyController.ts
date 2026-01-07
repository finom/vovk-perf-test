import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecy")
export default class EcyController {
  @operation({
    summary: "Get Ecy",
  })
  @get()
  static getEcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecy",
  })
  @post("{id}")
  static createEcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
