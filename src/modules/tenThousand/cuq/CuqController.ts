import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuq")
export default class CuqController {
  @operation({
    summary: "Get Cuq",
  })
  @get()
  static getCuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuq",
  })
  @post("{id}")
  static createCuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
