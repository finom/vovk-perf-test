import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwn")
export default class DwnController {
  @operation({
    summary: "Get Dwn",
  })
  @get()
  static getDwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwn",
  })
  @post("{id}")
  static createDwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
