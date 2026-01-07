import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aff")
export default class AffController {
  @operation({
    summary: "Get Aff",
  })
  @get()
  static getAff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aff",
  })
  @post("{id}")
  static createAff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
