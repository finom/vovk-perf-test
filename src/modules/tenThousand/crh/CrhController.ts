import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crh")
export default class CrhController {
  @operation({
    summary: "Get Crh",
  })
  @get()
  static getCrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crh",
  })
  @post("{id}")
  static createCrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
