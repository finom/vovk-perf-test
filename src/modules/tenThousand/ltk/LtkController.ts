import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltk")
export default class LtkController {
  @operation({
    summary: "Get Ltk",
  })
  @get()
  static getLtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltk",
  })
  @post("{id}")
  static createLtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
