import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceq")
export default class CeqController {
  @operation({
    summary: "Get Ceq",
  })
  @get()
  static getCeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceq",
  })
  @post("{id}")
  static createCeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
