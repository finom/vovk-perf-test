import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dz")
export default class DzController {
  @operation({
    summary: "Get Dz",
  })
  @get()
  static getDz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dz",
  })
  @post("{id}")
  static createDz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
