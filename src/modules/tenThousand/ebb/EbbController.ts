import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebb")
export default class EbbController {
  @operation({
    summary: "Get Ebb",
  })
  @get()
  static getEbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebb",
  })
  @post("{id}")
  static createEbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
