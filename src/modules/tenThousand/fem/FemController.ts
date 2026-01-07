import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fem")
export default class FemController {
  @operation({
    summary: "Get Fem",
  })
  @get()
  static getFem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fem",
  })
  @post("{id}")
  static createFem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
