import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aa")
export default class AaController {
  @operation({
    summary: "Get Aa",
  })
  @get()
  static getAa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aa",
  })
  @post("{id}")
  static createAa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
