import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bva")
export default class BvaController {
  @operation({
    summary: "Get Bva",
  })
  @get()
  static getBva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bva",
  })
  @post("{id}")
  static createBva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
