import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfa")
export default class CfaController {
  @operation({
    summary: "Get Cfa",
  })
  @get()
  static getCfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfa",
  })
  @post("{id}")
  static createCfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
