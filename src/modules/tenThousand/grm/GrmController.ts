import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grm")
export default class GrmController {
  @operation({
    summary: "Get Grm",
  })
  @get()
  static getGrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grm",
  })
  @post("{id}")
  static createGrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
