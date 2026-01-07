import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsl")
export default class LslController {
  @operation({
    summary: "Get Lsl",
  })
  @get()
  static getLsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsl",
  })
  @post("{id}")
  static createLsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
