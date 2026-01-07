import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dof")
export default class DofController {
  @operation({
    summary: "Get Dof",
  })
  @get()
  static getDof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dof",
  })
  @post("{id}")
  static createDof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
