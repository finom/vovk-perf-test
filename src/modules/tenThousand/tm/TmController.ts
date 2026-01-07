import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tm")
export default class TmController {
  @operation({
    summary: "Get Tm",
  })
  @get()
  static getTm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tm",
  })
  @post("{id}")
  static createTm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
