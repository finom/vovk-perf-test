import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fti")
export default class FtiController {
  @operation({
    summary: "Get Fti",
  })
  @get()
  static getFti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fti",
  })
  @post("{id}")
  static createFti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
