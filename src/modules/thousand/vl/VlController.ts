import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vl")
export default class VlController {
  @operation({
    summary: "Get Vl",
  })
  @get()
  static getVl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vl",
  })
  @post("{id}")
  static createVl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
