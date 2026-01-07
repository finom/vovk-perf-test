import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mag")
export default class MagController {
  @operation({
    summary: "Get Mag",
  })
  @get()
  static getMag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mag",
  })
  @post("{id}")
  static createMag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
