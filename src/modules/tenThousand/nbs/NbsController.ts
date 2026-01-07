import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbs")
export default class NbsController {
  @operation({
    summary: "Get Nbs",
  })
  @get()
  static getNbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbs",
  })
  @post("{id}")
  static createNbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
