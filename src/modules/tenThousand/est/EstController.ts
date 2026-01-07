import { procedure, prefix, get, post, operation } from "vovk";

@prefix("est")
export default class EstController {
  @operation({
    summary: "Get Est",
  })
  @get()
  static getEst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Est",
  })
  @post("{id}")
  static createEst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
