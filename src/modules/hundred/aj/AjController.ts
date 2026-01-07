import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aj")
export default class AjController {
  @operation({
    summary: "Get Aj",
  })
  @get()
  static getAj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aj",
  })
  @post("{id}")
  static createAj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
