import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vb")
export default class VbController {
  @operation({
    summary: "Get Vb",
  })
  @get()
  static getVb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vb",
  })
  @post("{id}")
  static createVb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
