import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceg")
export default class CegController {
  @operation({
    summary: "Get Ceg",
  })
  @get()
  static getCeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceg",
  })
  @post("{id}")
  static createCeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
