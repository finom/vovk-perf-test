import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coq")
export default class CoqController {
  @operation({
    summary: "Get Coq",
  })
  @get()
  static getCoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coq",
  })
  @post("{id}")
  static createCoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
