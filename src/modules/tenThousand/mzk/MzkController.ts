import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzk")
export default class MzkController {
  @operation({
    summary: "Get Mzk",
  })
  @get()
  static getMzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzk",
  })
  @post("{id}")
  static createMzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
