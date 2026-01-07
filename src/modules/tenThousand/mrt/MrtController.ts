import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrt")
export default class MrtController {
  @operation({
    summary: "Get Mrt",
  })
  @get()
  static getMrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrt",
  })
  @post("{id}")
  static createMrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
