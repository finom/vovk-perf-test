import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eav")
export default class EavController {
  @operation({
    summary: "Get Eav",
  })
  @get()
  static getEav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eav",
  })
  @post("{id}")
  static createEav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
