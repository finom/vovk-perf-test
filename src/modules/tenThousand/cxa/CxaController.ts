import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxa")
export default class CxaController {
  @operation({
    summary: "Get Cxa",
  })
  @get()
  static getCxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxa",
  })
  @post("{id}")
  static createCxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
