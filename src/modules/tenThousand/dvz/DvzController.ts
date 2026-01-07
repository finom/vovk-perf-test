import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvz")
export default class DvzController {
  @operation({
    summary: "Get Dvz",
  })
  @get()
  static getDvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvz",
  })
  @post("{id}")
  static createDvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
