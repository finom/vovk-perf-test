import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyl")
export default class EylController {
  @operation({
    summary: "Get Eyl",
  })
  @get()
  static getEyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyl",
  })
  @post("{id}")
  static createEyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
