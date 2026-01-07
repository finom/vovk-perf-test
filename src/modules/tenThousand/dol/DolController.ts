import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dol")
export default class DolController {
  @operation({
    summary: "Get Dol",
  })
  @get()
  static getDol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dol",
  })
  @post("{id}")
  static createDol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
