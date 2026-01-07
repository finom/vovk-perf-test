import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nx")
export default class NxController {
  @operation({
    summary: "Get Nx",
  })
  @get()
  static getNx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nx",
  })
  @post("{id}")
  static createNx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
