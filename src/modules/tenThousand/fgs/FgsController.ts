import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgs")
export default class FgsController {
  @operation({
    summary: "Get Fgs",
  })
  @get()
  static getFgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgs",
  })
  @post("{id}")
  static createFgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
