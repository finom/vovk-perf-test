import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dye")
export default class DyeController {
  @operation({
    summary: "Get Dye",
  })
  @get()
  static getDye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dye",
  })
  @post("{id}")
  static createDye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
