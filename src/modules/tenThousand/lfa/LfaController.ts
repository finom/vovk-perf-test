import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfa")
export default class LfaController {
  @operation({
    summary: "Get Lfa",
  })
  @get()
  static getLfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfa",
  })
  @post("{id}")
  static createLfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
