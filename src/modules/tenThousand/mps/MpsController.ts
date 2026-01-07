import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mps")
export default class MpsController {
  @operation({
    summary: "Get Mps",
  })
  @get()
  static getMps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mps",
  })
  @post("{id}")
  static createMps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
