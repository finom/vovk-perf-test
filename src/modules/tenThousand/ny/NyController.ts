import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ny")
export default class NyController {
  @operation({
    summary: "Get Ny",
  })
  @get()
  static getNy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ny",
  })
  @post("{id}")
  static createNy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
