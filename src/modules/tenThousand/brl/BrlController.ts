import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brl")
export default class BrlController {
  @operation({
    summary: "Get Brl",
  })
  @get()
  static getBrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brl",
  })
  @post("{id}")
  static createBrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
