import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cl")
export default class ClController {
  @operation({
    summary: "Get Cl",
  })
  @get()
  static getCl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cl",
  })
  @post("{id}")
  static createCl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
