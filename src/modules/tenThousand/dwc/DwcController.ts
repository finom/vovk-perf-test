import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwc")
export default class DwcController {
  @operation({
    summary: "Get Dwc",
  })
  @get()
  static getDwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwc",
  })
  @post("{id}")
  static createDwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
