import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoj")
export default class EojController {
  @operation({
    summary: "Get Eoj",
  })
  @get()
  static getEoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoj",
  })
  @post("{id}")
  static createEoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
