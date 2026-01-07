import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erd")
export default class ErdController {
  @operation({
    summary: "Get Erd",
  })
  @get()
  static getErd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erd",
  })
  @post("{id}")
  static createErd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
