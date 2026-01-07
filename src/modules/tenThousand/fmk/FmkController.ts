import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmk")
export default class FmkController {
  @operation({
    summary: "Get Fmk",
  })
  @get()
  static getFmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmk",
  })
  @post("{id}")
  static createFmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
