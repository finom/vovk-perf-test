import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzk")
export default class BzkController {
  @operation({
    summary: "Get Bzk",
  })
  @get()
  static getBzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzk",
  })
  @post("{id}")
  static createBzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
