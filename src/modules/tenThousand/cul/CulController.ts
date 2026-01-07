import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cul")
export default class CulController {
  @operation({
    summary: "Get Cul",
  })
  @get()
  static getCul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cul",
  })
  @post("{id}")
  static createCul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
