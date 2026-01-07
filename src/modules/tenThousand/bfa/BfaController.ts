import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfa")
export default class BfaController {
  @operation({
    summary: "Get Bfa",
  })
  @get()
  static getBfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfa",
  })
  @post("{id}")
  static createBfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
