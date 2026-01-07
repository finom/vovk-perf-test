import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfa")
export default class DfaController {
  @operation({
    summary: "Get Dfa",
  })
  @get()
  static getDfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfa",
  })
  @post("{id}")
  static createDfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
