import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aot")
export default class AotController {
  @operation({
    summary: "Get Aot",
  })
  @get()
  static getAot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aot",
  })
  @post("{id}")
  static createAot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
