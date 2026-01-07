import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cca")
export default class CcaController {
  @operation({
    summary: "Get Cca",
  })
  @get()
  static getCca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cca",
  })
  @post("{id}")
  static createCca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
