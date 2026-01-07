import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwf")
export default class DwfController {
  @operation({
    summary: "Get Dwf",
  })
  @get()
  static getDwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwf",
  })
  @post("{id}")
  static createDwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
