import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvf")
export default class FvfController {
  @operation({
    summary: "Get Fvf",
  })
  @get()
  static getFvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvf",
  })
  @post("{id}")
  static createFvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
