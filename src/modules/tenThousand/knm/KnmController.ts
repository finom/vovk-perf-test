import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knm")
export default class KnmController {
  @operation({
    summary: "Get Knm",
  })
  @get()
  static getKnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knm",
  })
  @post("{id}")
  static createKnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
