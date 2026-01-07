import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnd")
export default class BndController {
  @operation({
    summary: "Get Bnd",
  })
  @get()
  static getBnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnd",
  })
  @post("{id}")
  static createBnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
