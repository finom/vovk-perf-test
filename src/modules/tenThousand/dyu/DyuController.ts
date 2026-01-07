import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyu")
export default class DyuController {
  @operation({
    summary: "Get Dyu",
  })
  @get()
  static getDyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyu",
  })
  @post("{id}")
  static createDyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
