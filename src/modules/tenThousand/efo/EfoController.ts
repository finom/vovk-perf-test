import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efo")
export default class EfoController {
  @operation({
    summary: "Get Efo",
  })
  @get()
  static getEfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efo",
  })
  @post("{id}")
  static createEfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
