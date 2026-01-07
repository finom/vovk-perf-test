import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgp")
export default class FgpController {
  @operation({
    summary: "Get Fgp",
  })
  @get()
  static getFgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgp",
  })
  @post("{id}")
  static createFgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
