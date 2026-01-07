import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eom")
export default class EomController {
  @operation({
    summary: "Get Eom",
  })
  @get()
  static getEom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eom",
  })
  @post("{id}")
  static createEom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
