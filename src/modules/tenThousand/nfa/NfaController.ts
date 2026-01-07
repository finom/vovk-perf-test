import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfa")
export default class NfaController {
  @operation({
    summary: "Get Nfa",
  })
  @get()
  static getNfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfa",
  })
  @post("{id}")
  static createNfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
