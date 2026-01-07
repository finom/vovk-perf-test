import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoj")
export default class HojController {
  @operation({
    summary: "Get Hoj",
  })
  @get()
  static getHoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoj",
  })
  @post("{id}")
  static createHoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
