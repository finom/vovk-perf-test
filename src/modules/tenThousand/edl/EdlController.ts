import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edl")
export default class EdlController {
  @operation({
    summary: "Get Edl",
  })
  @get()
  static getEdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edl",
  })
  @post("{id}")
  static createEdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
