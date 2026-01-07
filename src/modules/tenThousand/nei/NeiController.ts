import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nei")
export default class NeiController {
  @operation({
    summary: "Get Nei",
  })
  @get()
  static getNei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nei",
  })
  @post("{id}")
  static createNei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
