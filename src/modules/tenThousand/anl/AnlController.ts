import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anl")
export default class AnlController {
  @operation({
    summary: "Get Anl",
  })
  @get()
  static getAnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anl",
  })
  @post("{id}")
  static createAnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
