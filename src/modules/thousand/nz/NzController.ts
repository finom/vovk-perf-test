import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nz")
export default class NzController {
  @operation({
    summary: "Get Nz",
  })
  @get()
  static getNz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nz",
  })
  @post("{id}")
  static createNz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
