import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvg")
export default class DvgController {
  @operation({
    summary: "Get Dvg",
  })
  @get()
  static getDvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvg",
  })
  @post("{id}")
  static createDvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
