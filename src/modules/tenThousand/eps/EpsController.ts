import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eps")
export default class EpsController {
  @operation({
    summary: "Get Eps",
  })
  @get()
  static getEps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eps",
  })
  @post("{id}")
  static createEps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
