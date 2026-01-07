import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mt")
export default class MtController {
  @operation({
    summary: "Get Mt",
  })
  @get()
  static getMt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mt",
  })
  @post("{id}")
  static createMt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
