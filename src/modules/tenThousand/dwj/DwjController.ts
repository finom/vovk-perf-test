import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwj")
export default class DwjController {
  @operation({
    summary: "Get Dwj",
  })
  @get()
  static getDwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwj",
  })
  @post("{id}")
  static createDwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
