import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eow")
export default class EowController {
  @operation({
    summary: "Get Eow",
  })
  @get()
  static getEow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eow",
  })
  @post("{id}")
  static createEow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
