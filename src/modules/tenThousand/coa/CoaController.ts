import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coa")
export default class CoaController {
  @operation({
    summary: "Get Coa",
  })
  @get()
  static getCoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coa",
  })
  @post("{id}")
  static createCoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
