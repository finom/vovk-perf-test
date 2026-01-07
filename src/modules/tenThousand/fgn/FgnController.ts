import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgn")
export default class FgnController {
  @operation({
    summary: "Get Fgn",
  })
  @get()
  static getFgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgn",
  })
  @post("{id}")
  static createFgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
