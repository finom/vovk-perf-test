import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gen")
export default class GenController {
  @operation({
    summary: "Get Gen",
  })
  @get()
  static getGen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gen",
  })
  @post("{id}")
  static createGen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
