import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwt")
export default class DwtController {
  @operation({
    summary: "Get Dwt",
  })
  @get()
  static getDwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwt",
  })
  @post("{id}")
  static createDwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
