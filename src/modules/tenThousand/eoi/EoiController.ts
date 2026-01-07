import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoi")
export default class EoiController {
  @operation({
    summary: "Get Eoi",
  })
  @get()
  static getEoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoi",
  })
  @post("{id}")
  static createEoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
