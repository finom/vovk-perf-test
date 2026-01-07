import { procedure, prefix, get, post, operation } from "vovk";

@prefix("br")
export default class BrController {
  @operation({
    summary: "Get Br",
  })
  @get()
  static getBr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Br",
  })
  @post("{id}")
  static createBr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
