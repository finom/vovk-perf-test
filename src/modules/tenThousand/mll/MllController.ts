import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mll")
export default class MllController {
  @operation({
    summary: "Get Mll",
  })
  @get()
  static getMll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mll",
  })
  @post("{id}")
  static createMll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
