import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fes")
export default class FesController {
  @operation({
    summary: "Get Fes",
  })
  @get()
  static getFes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fes",
  })
  @post("{id}")
  static createFes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
