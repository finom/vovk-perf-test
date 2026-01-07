import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehh")
export default class EhhController {
  @operation({
    summary: "Get Ehh",
  })
  @get()
  static getEhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehh",
  })
  @post("{id}")
  static createEhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
