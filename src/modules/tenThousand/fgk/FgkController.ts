import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgk")
export default class FgkController {
  @operation({
    summary: "Get Fgk",
  })
  @get()
  static getFgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgk",
  })
  @post("{id}")
  static createFgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
