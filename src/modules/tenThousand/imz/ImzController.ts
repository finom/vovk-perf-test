import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imz")
export default class ImzController {
  @operation({
    summary: "Get Imz",
  })
  @get()
  static getImz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imz",
  })
  @post("{id}")
  static createImz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
