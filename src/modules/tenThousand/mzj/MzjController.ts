import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzj")
export default class MzjController {
  @operation({
    summary: "Get Mzj",
  })
  @get()
  static getMzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzj",
  })
  @post("{id}")
  static createMzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
