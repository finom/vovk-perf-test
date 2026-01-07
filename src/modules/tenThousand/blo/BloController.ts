import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blo")
export default class BloController {
  @operation({
    summary: "Get Blo",
  })
  @get()
  static getBlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blo",
  })
  @post("{id}")
  static createBlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
