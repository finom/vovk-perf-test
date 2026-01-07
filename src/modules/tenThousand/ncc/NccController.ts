import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncc")
export default class NccController {
  @operation({
    summary: "Get Ncc",
  })
  @get()
  static getNcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncc",
  })
  @post("{id}")
  static createNcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
